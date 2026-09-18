// Global state
let currentQuiz = null;
let questions = [];
let categories = {};
let quizBaseDir = '';
let currentQuestion = 0;
let score = 0;
let answers = [];
let quizStarted = false;
let activeQuestions = [];
let answered = false;
let isExamMode = false; // Track if we're in exam mode
let isIQMode = false;   // true when quiz has mode:'iq' — no per-question feedback, points-based IQ result

// ─── QUIZ KEYBOARD SUPPORT ──────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('quiz-list')) {
        loadQuizList();
    } else if (document.getElementById('quiz-title')) {
        loadQuiz();
    }

    // Keyboard support: A/B/C/D to select, Enter for next
    document.addEventListener('keydown', function(e) {
        // Only if quiz is gestart en quiz-screen zichtbaar
        const quizScreen = document.getElementById('quiz-screen');
        if (!quizScreen || quizScreen.classList.contains('hidden')) return;

        // A/B/C/D (case-insensitive)
        const key = e.key.toLowerCase();
        const validKeys = ['a', 'b', 'c', 'd', 'e'];
        if (validKeys.includes(key)) {
            const idx = validKeys.indexOf(key);
            const options = document.querySelectorAll('.option');
            if (options[idx]) {
                options[idx].click();
            }
        }
        // Enter: volgende/controleer
        if (e.key === 'Enter') {
            const nextBtn = document.getElementById('next-btn');
            if (nextBtn && !nextBtn.disabled) {
                nextBtn.click();
            }
        }
    });
});

const DEFAULT_QUIZ_GROUP = 'Examens oefenen';

async function loadQuizList() {
    const list = document.getElementById('quiz-list');
    try {
        const response = await fetch('quizzes/quizzes.json');
        const quizzes = await response.json();

        // Group entries (default group, or an explicit `group` in the registry),
        // then sort each group by year, then quarter, then title.
        const groups = new Map();
        quizzes.forEach(quiz => {
            const name = quiz.group || DEFAULT_QUIZ_GROUP;
            if (!groups.has(name)) groups.set(name, []);
            groups.get(name).push(quiz);
        });

        list.innerHTML = '';
        groups.forEach((items, groupName) => {
            items.sort((a, b) =>
                (b.year || 0) - (a.year || 0) ||        // hoogste jaar eerst
                (a.quarter || 99) - (b.quarter || 99) || // daarbinnen kwartiel oplopend
                a.title.localeCompare(b.title));

            const heading = document.createElement('h2');
            heading.className = 'quiz-group-title';
            heading.textContent = groupName;
            list.appendChild(heading);

            const grid = document.createElement('div');
            grid.className = 'quiz-grid';
            items.forEach(quiz => grid.appendChild(buildQuizCard(quiz)));
            list.appendChild(grid);
        });
    } catch (error) {
        console.error('Error loading quizzes:', error);
        list.innerHTML = '<p>Er is een fout opgetreden bij het laden van de quizzen.</p>';
    }
}

function buildQuizCard(quiz) {
    const card = document.createElement('div');
    card.className = 'quiz-card';
    card.setAttribute('role', 'link');
    card.tabIndex = 0;

    const open = () => window.location.href = `quiz.html?id=${quiz.id}`;
    card.onclick = open;
    card.onkeydown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
    };

    // Losse badges: jaar en kwartiel apart, onder de beschrijving. Zonder
    // jaar/kwartiel (bv. IQ-test) valt het terug op de subtitle uit de registry.
    const badges = [];
    if (quiz.year) badges.push(`Jaar ${quiz.year}`);
    if (quiz.quarter) badges.push(`Kwartiel ${quiz.quarter}`);
    if (!badges.length && quiz.subtitle) badges.push(quiz.subtitle);

    card.innerHTML = `
        <h3>${quiz.title}</h3>
        <p>${quiz.description}</p>
        ${badges.length ? `<div class="quiz-badges">${badges.map(b => `<span class="quiz-badge">${b}</span>`).join('')}</div>` : ''}
    `;
    return card;
}

async function loadQuiz() {
    const urlParams = new URLSearchParams(window.location.search);
    const quizId = urlParams.get('id');
    
    if (!quizId) {
        window.location.href = 'index.html';
        return;
    }

    try {
        const listResponse = await fetch('quizzes/quizzes.json');
        const quizzes = await listResponse.json();
        const quizInfo = quizzes.find(q => q.id === quizId);
        if (!quizInfo) {
            throw new Error('Quiz not found');
        }

        const response = await fetch(quizInfo.file);
        const data = await response.json();

        currentQuiz = data;
        isIQMode = data.mode === 'iq';
        quizBaseDir = quizInfo.file.substring(0, quizInfo.file.lastIndexOf('/') + 1);

        // Zet subtitel indien aanwezig, anders blijft de div verborgen (default in quiz.html)
        const subtitleDiv = document.getElementById('quiz-subtitle');
        if (subtitleDiv && quizInfo.subtitle) {
            subtitleDiv.textContent = quizInfo.subtitle;
            subtitleDiv.style.display = 'block';
        }
        
        // Reset global state
        questions = [];
        categories = {};
        
        // Handle both old (flat) and new (nested) structures
        if (data.questions) {
            // Old structure: questions are at root
            questions = data.questions;
            data.categories.forEach(cat => {
                categories[cat.id] = cat;
            });
        } else {
            // New structure: questions are inside categories
            data.categories.forEach(cat => {
                if (cat.id !== 'all' && cat.questions) {
                    questions.push(...cat.questions);
                }
                categories[cat.id] = cat;
            });
            
            // Ensure 'all' category has all questions
            if (categories['all']) {
                categories['all'].questions = questions;
            }
        }
        
        // Setup categories menu
        const menu = document.querySelector('.category-menu');
        menu.innerHTML = '';
        
        data.categories.forEach(cat => {
            const btn = document.createElement('button');
            btn.className = 'category-btn';
            btn.textContent = cat.name;
            btn.onclick = () => startQuiz(cat.id, btn);
            menu.appendChild(btn);
        });

        document.getElementById('quiz-title').textContent = data.title;
        document.title = data.title;

        // IQ mode: skip category menu and start immediately
        if (isIQMode && data.categories.length === 1) {
            await startQuiz(data.categories[0].id);
            return;
        }

    } catch (error) {
        console.error('Error loading quiz:', error);
        alert('Er is een fout opgetreden bij het laden van de quiz.');
    }
}

// Resolves a category's questions, fetching its file on first use and
// caching the result on the category object so a replay doesn't re-fetch.
async function loadCategoryQuestions(catId) {
    const cat = categories[catId];

    if (cat.questions) {
        return cat.questions;
    }

    if (cat.file) {
        const response = await fetch(quizBaseDir + cat.file);
        const data = await response.json();
        cat.questions = data.questions;
        return cat.questions;
    }

    if (catId === 'all') {
        const allQuestions = [];
        for (const otherCat of Object.values(categories)) {
            if (otherCat.id === 'all') continue;
            allQuestions.push(...await loadCategoryQuestions(otherCat.id));
        }
        cat.questions = allQuestions;
        return allQuestions;
    }

    // Old flat structure: questions live in the root `questions` array
    return questions.slice(cat.start, cat.end);
}

async function startQuiz(category, buttonEl) {
    if (buttonEl) {
        buttonEl.disabled = true;
        buttonEl.dataset.originalText = buttonEl.textContent;
        buttonEl.textContent = 'Laden...';
    }

    let categoryQuestions;
    try {
        categoryQuestions = await loadCategoryQuestions(category);
    } catch (error) {
        console.error('Error loading category:', error);
        alert('Er is een fout opgetreden bij het laden van deze categorie.');
        if (buttonEl) {
            buttonEl.disabled = false;
            buttonEl.textContent = buttonEl.dataset.originalText;
        }
        return;
    }

    if (buttonEl) {
        buttonEl.disabled = false;
        buttonEl.textContent = buttonEl.dataset.originalText;
    }

    // Check if this is exam mode (IQ mode or category id contains 'examen')
    isExamMode = isIQMode || category.toLowerCase().includes('examen');

    activeQuestions = categoryQuestions;

    currentQuestion = 0;
    score = 0;
    answers = [];
    answered = false;

    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    quizStarted = true;
    showQuestion();
}

function getLetters(count) {
    return ['A', 'B', 'C', 'D', 'E', 'F'].slice(0, count);
}

function showQuestion() {
    const q = activeQuestions[currentQuestion];
    
    // Show section label small and grey after question number
    const sectionSuffix = (isIQMode && q.section) ? `  <span style="font-size:0.82em;color:#888;font-weight:400;">${q.section}</span>` : '';
    document.getElementById('question-number').innerHTML = `Vraag ${currentQuestion + 1} van ${activeQuestions.length}${sectionSuffix}`;

    document.getElementById('question-text').textContent = q.question;

    // Handle question image
    const imageContainer = document.getElementById('question-image');
    const imageElement = document.getElementById('question-img');
    
    if (q.image) {
        imageElement.src = q.image;
        imageElement.onclick = () => openLightbox(q.image);
        imageContainer.classList.remove('hidden');
    } else {
        imageContainer.classList.add('hidden');
        imageElement.src = '';
        imageElement.onclick = null;
    }
    
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    
    const letters = getLetters(q.options.length);
    q.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.innerHTML = `
            <div class="option-letter">${letters[index]}</div>
            <div>${option}</div>
        `;
        optionDiv.onclick = () => selectOption(index);
        optionsDiv.appendChild(optionDiv);
    });

    document.getElementById('next-btn').disabled = true;
    const isLastQuestion = currentQuestion === activeQuestions.length - 1;
    document.getElementById('next-btn').textContent = isExamMode
        ? (isLastQuestion ? 'Bekijk resultaat' : 'Volgende')
        : 'Controleer';
    document.getElementById('feedback').classList.add('hidden');
    answered = false;
}

function selectOption(index) {
    if (answered && !isExamMode) return;
    
    const options = document.querySelectorAll('.option');
    options.forEach(opt => opt.classList.remove('selected'));
    options[index].classList.add('selected');
    document.getElementById('next-btn').disabled = false;
    answers[currentQuestion] = index;
}

function nextQuestion() {
    if (!answered) {
        const selectedOption = answers[currentQuestion];
        
        if (isExamMode || isIQMode) {
            // Exam / IQ mode: no immediate feedback, just save answer and move on
            answered = true;
            currentQuestion++;
            
            if (currentQuestion < activeQuestions.length) {
                showQuestion();
            } else {
                if (isIQMode) {
                    showIQResults();
                } else {
                    showExamResults();
                }
            }
        } else {
            // Practice mode: show immediate feedback
            const q = activeQuestions[currentQuestion];
            const options = document.querySelectorAll('.option');
            const feedback = document.getElementById('feedback');
            const letters = getLetters(q.options.length);
            
            options.forEach(opt => opt.style.pointerEvents = 'none');
            
            if (selectedOption === q.correct) {
                score++;
                options[selectedOption].classList.add('correct');
                feedback.className = 'feedback correct';
                feedback.innerHTML = `✓ Correct!<div class="explanation">💡 ${q.explanation}</div>`;
            } else {
                options[selectedOption].classList.add('incorrect');
                options[q.correct].classList.add('correct');
                feedback.className = 'feedback incorrect';
                feedback.innerHTML = `✗ Fout!<div class="correct-answer">Het juiste antwoord is: ${letters[q.correct]} </div><div class="explanation"> ${q.explanation}</div>`;
            }
            
            feedback.classList.remove('hidden');
            answered = true;
            
            if (currentQuestion < activeQuestions.length - 1) {
                document.getElementById('next-btn').textContent = 'Volgende';
            } else {
                document.getElementById('next-btn').textContent = 'Bekijk Score';
            }
        }
    } else {
        // Go to next question (practice mode)
        currentQuestion++;
        
        if (currentQuestion < activeQuestions.length) {
            showQuestion();
        } else {
            showEndScreen();
        }
    }
}

function showEndScreen() {
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('end-screen').classList.remove('hidden');
    
    const percentage = Math.round((score / activeQuestions.length) * 100);
    const scoreDiv = document.getElementById('score');
    scoreDiv.textContent = `${score}/${activeQuestions.length} (${percentage}%)`;
    
    if (percentage >= 90) {
        scoreDiv.className = 'score excellent';
        document.getElementById('score-text').textContent = 'Uitstekend! Je bent klaar voor het examen!';
    } else if (percentage >= 70) {
        scoreDiv.className = 'score good';
        document.getElementById('score-text').textContent = 'Goed gedaan! Nog even oefenen en je haalt het zeker!';
    } else if (percentage >= 55) {
        scoreDiv.className = 'score average';
        document.getElementById('score-text').textContent = 'Voldoende, maar extra studie wordt aangeraden.';
    } else {
        scoreDiv.className = 'score poor';
        document.getElementById('score-text').textContent = 'Meer oefening nodig. Bekijk de antwoorden en probeer opnieuw!';
    }
}

function calculateGrade(correctAnswers, totalQuestions = 40) {
    // Grade calculation based on the provided table (norm curve for a 40-question exam).
    const gradeTable = {
        0: 1.0, 1: 1.2, 2: 1.3, 3: 1.5, 4: 1.7, 5: 1.9, 6: 2.0, 7: 2.2,
        8: 2.4, 9: 2.6, 10: 2.7, 11: 2.9, 12: 3.1, 13: 3.3, 14: 3.4, 15: 3.6,
        16: 3.8, 17: 3.9, 18: 4.1, 19: 4.3, 20: 4.5, 21: 4.6, 22: 4.8, 23: 5.0,
        24: 5.2, 25: 5.3, 26: 5.5, 27: 5.8, 28: 6.1, 29: 6.5, 30: 6.8, 31: 7.1,
        32: 7.4, 33: 7.8, 34: 8.1, 35: 8.4, 36: 8.7, 37: 9.0, 38: 9.4, 39: 9.7,
        40: 10.0
    };
    // Scale the score onto the 40-point norm table so an exam with a different
    // number of questions still maps onto the same grading curve.
    const scaled = Math.round((correctAnswers / totalQuestions) * 40);
    return gradeTable[Math.max(0, Math.min(40, scaled))] || 1.0;
}

function showExamResults() {
    // Calculate score
    score = 0;
    activeQuestions.forEach((q, index) => {
        if (answers[index] === q.correct) {
            score++;
        }
    });
    
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('end-screen').classList.remove('hidden');
    
    const percentage = Math.round((score / activeQuestions.length) * 100);
    const grade = calculateGrade(score, activeQuestions.length);
    const passed = grade >= 5.5;
    
    const scoreDiv = document.getElementById('score');
    scoreDiv.innerHTML = `
        <div class="grade-display">${grade.toFixed(1)}</div>
        <div class="score-details">${score}/${activeQuestions.length} correct (${percentage}%)</div>
    `;
    
    // Determine pass/fail for exam
    if (passed && grade >= 9.0) {
        scoreDiv.className = 'score excellent';
        document.getElementById('score-text').innerHTML = '<strong>Uitstekend geslaagd!</strong><br>Je bent helemaal klaar voor het examen!';
    } else if (passed && grade >= 7.5) {
        scoreDiv.className = 'score good';
        document.getElementById('score-text').innerHTML = '<strong>Goed geslaagd!</strong><br>Je hebt een mooie score behaald!';
    } else if (passed) {
        scoreDiv.className = 'score average';
        document.getElementById('score-text').innerHTML = '<strong>Geslaagd!</strong><br>Je hebt de 5.5 grens gehaald. Misschien nog wat oefenen voor meer zekerheid?';
    } else {
        scoreDiv.className = 'score poor';
        document.getElementById('score-text').innerHTML = '<strong>Helaas niet geslaagd.</strong><br>Je hebt minimaal een 5.5 nodig. Bestudeer onderstaande antwoorden en probeer opnieuw!';
    }
    
    // Show detailed results
    const resultsContainer = document.createElement('div');
    resultsContainer.className = 'exam-results';
    
    const correctCount = activeQuestions.filter((q, index) => answers[index] === q.correct).length;
    const incorrectCount = activeQuestions.length - correctCount;
    
    resultsContainer.innerHTML = `
        <h3>Gedetailleerde Resultaten</h3>
        <p class="exam-summary">
            <span class="count-correct">✓ ${correctCount} correct</span> · 
            <span class="count-incorrect">✗ ${incorrectCount} fout</span>
        </p>
    `;
    
    activeQuestions.forEach((q, index) => {
        const isCorrect = answers[index] === q.correct;
        const letters = getLetters(q.options.length);
        const resultDiv = document.createElement('div');
        resultDiv.className = `exam-result-item ${isCorrect ? 'correct collapsible' : 'incorrect'}`;
        
        const header = document.createElement('div');
        header.className = 'result-header';
        header.innerHTML = `
            <span class="result-icon">${isCorrect ? '✓' : '✗'}</span>
            <strong>Vraag ${index + 1}:</strong> ${q.question}
            ${isCorrect ? '<span class="collapse-indicator">▼</span>' : ''}
        `;
        
        const details = document.createElement('div');
        details.className = `result-details ${isCorrect ? 'collapsed' : ''}`;
        details.innerHTML = `
            <div>Jouw antwoord: <strong>${letters[answers[index]]}. ${q.options[answers[index]]}</strong></div>
            ${!isCorrect ? `<div class="correct-answer-detail">Correct antwoord: <strong>${letters[q.correct]}. ${q.options[q.correct]}</strong></div>` : ''}
            <div class="explanation-detail">💡 ${q.explanation}</div>
        `;
        
        // Add click handler for collapsible correct answers
        if (isCorrect) {
            header.style.cursor = 'pointer';
            header.onclick = () => {
                details.classList.toggle('collapsed');
                const indicator = header.querySelector('.collapse-indicator');
                indicator.textContent = details.classList.contains('collapsed') ? '▼' : '▲';
            };
        }
        
        resultDiv.appendChild(header);
        resultDiv.appendChild(details);
        resultsContainer.appendChild(resultDiv);
    });
    
    // Insert results before buttons
    const endScreen = document.getElementById('end-screen');
    const existingResults = endScreen.querySelector('.exam-results');
    if (existingResults) {
        existingResults.remove();
    }
    
    const buttons = endScreen.querySelectorAll('.btn');
    endScreen.insertBefore(resultsContainer, buttons[0]);
}

// ─── LIGHTBOX ───────────────────────────────────────────────────────────────

function openLightbox(src) {
    const lb = document.getElementById('lightbox');
    document.getElementById('lightbox-img').src = src;
    lb.classList.add('active');
    document.addEventListener('keydown', lightboxKeyHandler);
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    document.removeEventListener('keydown', lightboxKeyHandler);
}

function lightboxKeyHandler(e) {
    if (e.key === 'Escape') closeLightbox();
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    answers = [];
    activeQuestions = [];
    answered = false;

    // loadQuiz() does not run again on replay, so recompute the mode from the
    // loaded quiz instead of forcing it off — otherwise the IQ test would
    // replay in practice mode. isExamMode is re-derived per category in startQuiz().
    isExamMode = false;
    isIQMode = !!(currentQuiz && currentQuiz.mode === 'iq');

    // Clean up exam results if present
    const existingResults = document.getElementById('end-screen').querySelector('.exam-results');
    if (existingResults) {
        existingResults.remove();
    }

    document.getElementById('end-screen').classList.add('hidden');

    // IQ quizzes skip the category screen — restart straight into the test.
    if (isIQMode && currentQuiz.categories && currentQuiz.categories.length === 1) {
        startQuiz(currentQuiz.categories[0].id);
    } else {
        document.getElementById('start-screen').classList.remove('hidden');
    }
}

// ─── IQ MODE RESULTS ────────────────────────────────────────────────────────

function getIQInfo(points) {
    if (points >= 63) return { iq: '130+',    label: 'Hoogbegaafd',            color: '#c084fc' };
    if (points >= 56) return { iq: '120–129', label: 'Zeer intelligent',        color: '#60a5fa' };
    if (points >= 49) return { iq: '110–119', label: 'Bovengemiddeld',          color: '#34d399' };
    if (points >= 42) return { iq: '100–109', label: 'Gemiddeld voor HBO',      color: '#fbbf24' };
    if (points >= 35) return { iq: '90–99',   label: 'Laag gemiddeld',          color: '#f97316' };
    if (points >= 28) return { iq: '80–89',   label: 'Beneden gemiddeld',       color: '#f87171' };
    return               { iq: '< 80',    label: 'Ver beneden gemiddeld',   color: '#ef4444' };
}

function showIQResults() {
    // Sum points for correct answers
    let totalEarned = 0;
    activeQuestions.forEach((q, index) => {
        if (answers[index] === q.correct) {
            totalEarned += (q.points || 1);
        }
    });

    const totalPossible = (currentQuiz && currentQuiz.totalPoints) ? currentQuiz.totalPoints : 70;
    const iqInfo = getIQInfo(totalEarned);
    const correctCount = activeQuestions.filter((q, i) => answers[i] === q.correct).length;
    const incorrectCount = activeQuestions.length - correctCount;

    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('end-screen').classList.remove('hidden');

    // Header score block
    const scoreDiv = document.getElementById('score');
    scoreDiv.className = 'score';
    scoreDiv.innerHTML = `
        <div style="font-size:2.8em;font-weight:800;color:${iqInfo.color};line-height:1;">IQ ${iqInfo.iq}</div>
        <div style="font-size:1.1em;color:#e0e0e0;margin-top:6px;font-weight:600;">${iqInfo.label}</div>
        <div style="font-size:0.82em;color:#b0b0b0;margin-top:6px;">
            ${totalEarned} / ${totalPossible} punten &nbsp;·&nbsp;
            <span style="color:#00ff88;">✓ ${correctCount} correct</span> &nbsp;·&nbsp;
            <span style="color:#ff4444;">✗ ${incorrectCount} fout</span>
        </div>
    `;
    document.getElementById('score-text').innerHTML = '';

    // IQ Scale
    const scaleRows = [
        { range: '130+',    label: 'Hoogbegaafd',          minPts: 63, color: '#c084fc' },
        { range: '120–129', label: 'Zeer intelligent',      minPts: 56, color: '#60a5fa' },
        { range: '110–119', label: 'Bovengemiddeld',        minPts: 49, color: '#34d399' },
        { range: '100–109', label: 'Gemiddeld voor HBO',    minPts: 42, color: '#fbbf24' },
        { range: '90–99',   label: 'Laag gemiddeld',        minPts: 35, color: '#f97316' },
        { range: '80–89',   label: 'Beneden gemiddeld',     minPts: 28, color: '#f87171' },
        { range: '< 80',    label: 'Ver beneden gemiddeld', minPts: 0,  color: '#ef4444' },
    ];

    const scaleHTML = scaleRows.map(row => {
        const active = iqInfo.iq === row.range;
        const barWidth = Math.min(100, Math.round((row.minPts / 70) * 85) + 15);
        return `
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:7px;
                    padding:5px 10px;border-radius:8px;
                    ${ active ? `background:rgba(255,255,255,0.07);border-left:3px solid ${row.color};` : 'opacity:0.55;' }">
            <div style="width:68px;font-size:0.78em;font-weight:700;color:${row.color};flex-shrink:0;">IQ ${row.range}</div>
            <div style="flex:1;background:#333;border-radius:4px;height:7px;overflow:hidden;">
                <div style="width:${barWidth}%;height:100%;background:${row.color};border-radius:4px;"></div>
            </div>
            <div style="font-size:0.78em;color:#ccc;width:160px;text-align:right;">
                ${row.label}${active ? ' <strong style="color:#fff;">← jij</strong>' : ''}
            </div>
        </div>`;
    }).join('');

    // Per-question detail
    const resultsContainer = document.createElement('div');
    resultsContainer.className = 'exam-results';
    resultsContainer.innerHTML = `
        <h3 style="margin-top:30px;color:#fff;">📊 IQ Schaal (HBO populatie)</h3>
        <div style="margin:14px 0 24px;">${scaleHTML}</div>
        <div style="padding:12px;background:rgba(255,255,255,0.05);border-radius:8px;
                    font-size:0.78em;color:#999;line-height:1.6;margin-bottom:24px;">
            ⚠️ <strong style="color:#ccc;">Disclaimer:</strong> Dit is een educatieve indicatieve test, geen officiële IQ-meting.
            Voor een officiële IQ-bepaling raadpleeg een GZ-psycholoog.<br>
            Gebaseerd op WAIS-IV, Raven's Matrices en CHC-model vraagtypen.
        </div>
        <h3 style="color:#fff;">Gedetailleerde Resultaten</h3>
        <p style="color:#ccc;margin-bottom:15px;">
            <span style="color:#00ff88;">✓ ${correctCount} correct</span> &nbsp;·&nbsp;
            <span style="color:#ff4444;">✗ ${incorrectCount} fout</span> &nbsp;·&nbsp;
            <span style="color:#fbbf24;">${totalEarned} / ${totalPossible} punten</span>
        </p>
    `;

    activeQuestions.forEach((q, index) => {
        const isCorrect = answers[index] === q.correct;
        const letters = getLetters(q.options.length);
        const resultDiv = document.createElement('div');
        resultDiv.className = `exam-result-item ${isCorrect ? 'correct collapsible' : 'incorrect'}`;

        const sectionTag = q.section
            ? `<div style="font-size:0.7em;color:#00d4ff;margin-bottom:2px;">${q.section} · ${q.points} punt${q.points > 1 ? 'en' : ''}</div>`
            : '';

        const header = document.createElement('div');
        header.className = 'result-header';
        header.innerHTML = `
            <span class="result-icon">${isCorrect ? '✓' : '✗'}</span>
            <div>${sectionTag}<strong>Vraag ${index + 1}:</strong> ${q.question}
            ${isCorrect ? '<span class="collapse-indicator">▼</span>' : ''}</div>
        `;

        const details = document.createElement('div');
        details.className = `result-details ${isCorrect ? 'collapsed' : ''}`;
        details.innerHTML = `
            <div>Jouw antwoord: <strong>${letters[answers[index]]}. ${q.options[answers[index]]}</strong></div>
            ${!isCorrect ? `<div class="correct-answer-detail">Correct antwoord: <strong>${letters[q.correct]}. ${q.options[q.correct]}</strong></div>` : ''}
            <div class="explanation-detail">💡 ${q.explanation}</div>
        `;

        if (isCorrect) {
            header.style.cursor = 'pointer';
            header.onclick = () => {
                details.classList.toggle('collapsed');
                const ind = header.querySelector('.collapse-indicator');
                if (ind) ind.textContent = details.classList.contains('collapsed') ? '▼' : '▲';
            };
        }

        resultDiv.appendChild(header);
        resultDiv.appendChild(details);
        resultsContainer.appendChild(resultDiv);
    });

    const endScreen = document.getElementById('end-screen');
    const existing = endScreen.querySelector('.exam-results');
    if (existing) existing.remove();
    const buttons = endScreen.querySelectorAll('.btn');
    endScreen.insertBefore(resultsContainer, buttons[0]);
}
