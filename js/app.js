// Global state
let currentQuiz = null;
let questions = [];
let categories = {};
let currentQuestion = 0;
let score = 0;
let answers = [];
let quizStarted = false;
let activeQuestions = [];
let answered = false;
let isExamMode = false; // Track if we're in exam mode

// Check which page we are on
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('quiz-list')) {
        loadQuizList();
    } else if (document.getElementById('quiz-title')) {
        loadQuiz();
    }
});

async function loadQuizList() {
    try {
        const response = await fetch('quizzes/quizzes.json');
        const quizzes = await response.json();
        const list = document.getElementById('quiz-list');
        
        quizzes.forEach(quiz => {
            const card = document.createElement('div');
            card.className = 'quiz-card';
            card.onclick = () => window.location.href = `quiz.html?id=${quiz.id}`;
            card.innerHTML = `
                <h3>${quiz.title}</h3>
                <p>${quiz.description}</p>
            `;
            list.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading quizzes:', error);
        document.getElementById('quiz-list').innerHTML = '<p>Er is een fout opgetreden bij het laden van de quizzen.</p>';
    }
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
            btn.onclick = () => startQuiz(cat.id);
            menu.appendChild(btn);
        });

        document.getElementById('quiz-title').textContent = data.title;
        document.title = data.title;

    } catch (error) {
        console.error('Error loading quiz:', error);
        alert('Er is een fout opgetreden bij het laden van de quiz.');
    }
}

function startQuiz(category) {
    const cat = categories[category];
    
    // Check if this is exam mode (category id contains 'examen')
    isExamMode = category.toLowerCase().includes('examen');
    
    if (cat.questions) {
        activeQuestions = cat.questions;
    } else {
        activeQuestions = questions.slice(cat.start, cat.end);
    }

    currentQuestion = 0;
    score = 0;
    answers = [];
    answered = false;
    
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    quizStarted = true;
    showQuestion();
}

function showQuestion() {
    const q = activeQuestions[currentQuestion];
    document.getElementById('question-number').textContent = `Vraag ${currentQuestion + 1} van ${activeQuestions.length}`;
    document.getElementById('question-text').textContent = q.question;
    
    // Handle question image
    const imageContainer = document.getElementById('question-image');
    const imageElement = document.getElementById('question-img');
    
    if (q.image) {
        imageElement.src = q.image;
        imageContainer.classList.remove('hidden');
    } else {
        imageContainer.classList.add('hidden');
        imageElement.src = '';
    }
    
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    
    // Prepare options with their original indices
    let optionsToDisplay = q.options.map((option, index) => ({
        text: option,
        originalIndex: index
    }));
    
    // Randomize if randomOrder is true
    if (q.randomOrder === true) {
        // Shuffle array using Fisher-Yates algorithm
        for (let i = optionsToDisplay.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [optionsToDisplay[i], optionsToDisplay[j]] = [optionsToDisplay[j], optionsToDisplay[i]];
        }
        // Store the mapping for this question
        if (!q.shuffledMapping) {
            q.shuffledMapping = optionsToDisplay.map(opt => opt.originalIndex);
        }
    } else {
        // No randomization, keep original order
        if (!q.shuffledMapping) {
            q.shuffledMapping = [0, 1, 2, 3];
        }
    }
    
    const letters = ['A', 'B', 'C', 'D'];
    optionsToDisplay.forEach((option, displayIndex) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.innerHTML = `
            <div class="option-letter">${letters[displayIndex]}</div>
            <div>${option.text}</div>
        `;
        // When user clicks, we need both: displayIndex for visual selection, originalIndex for answer
        optionDiv.onclick = () => selectOption(option.originalIndex, displayIndex);
        optionsDiv.appendChild(optionDiv);
    });

    document.getElementById('next-btn').disabled = true;
    document.getElementById('next-btn').textContent = isExamMode ? 'Volgende' : 'Controleer';
    document.getElementById('feedback').classList.add('hidden');
    answered = false;
    updateProgress();
}

function selectOption(originalIndex, displayIndex) {
    if (answered && !isExamMode) return;
    
    const options = document.querySelectorAll('.option');
    options.forEach(opt => opt.classList.remove('selected'));
    // Select the visual option at displayIndex
    options[displayIndex].classList.add('selected');
    document.getElementById('next-btn').disabled = false;
    // Store the original index for answer validation
    answers[currentQuestion] = originalIndex;
}

function nextQuestion() {
    if (!answered) {
        const selectedOption = answers[currentQuestion];
        
        if (isExamMode) {
            // Exam mode: no immediate feedback, just save answer and move on
            answered = true;
            currentQuestion++;
            
            if (currentQuestion < activeQuestions.length) {
                showQuestion();
            } else {
                showExamResults();
            }
        } else {
            // Practice mode: show immediate feedback
            const q = activeQuestions[currentQuestion];
            const options = document.querySelectorAll('.option');
            const feedback = document.getElementById('feedback');
            const letters = ['A', 'B', 'C', 'D'];
            
            options.forEach(opt => opt.style.pointerEvents = 'none');
            
            // Find which displayed option corresponds to the correct answer
            const correctDisplayIndex = q.shuffledMapping.indexOf(q.correct);
            const selectedDisplayIndex = q.shuffledMapping.indexOf(selectedOption);
            
            if (selectedOption === q.correct) {
                score++;
                options[selectedDisplayIndex].classList.add('correct');
                feedback.className = 'feedback correct';
                feedback.innerHTML = `✓ Correct!<div class="explanation">💡 ${q.explanation}</div>`;
            } else {
                options[selectedDisplayIndex].classList.add('incorrect');
                options[correctDisplayIndex].classList.add('correct');
                feedback.className = 'feedback incorrect';
                feedback.innerHTML = `✗ Fout!<div class="correct-answer">Het juiste antwoord is: ${letters[correctDisplayIndex]} </div><div class="explanation"> ${q.explanation}</div>`;
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

function updateProgress() {
    // Progress bar removed
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

function calculateGrade(correctAnswers) {
    // Grade calculation based on the provided table
    const gradeTable = {
        0: 1.0, 1: 1.2, 2: 1.3, 3: 1.5, 4: 1.7, 5: 1.9, 6: 2.0, 7: 2.2,
        8: 2.4, 9: 2.6, 10: 2.7, 11: 2.9, 12: 3.1, 13: 3.3, 14: 3.4, 15: 3.6,
        16: 3.8, 17: 3.9, 18: 4.1, 19: 4.3, 20: 4.5, 21: 4.6, 22: 4.8, 23: 5.0,
        24: 5.2, 25: 5.3, 26: 5.5, 27: 5.8, 28: 6.1, 29: 6.5, 30: 6.8, 31: 7.1,
        32: 7.4, 33: 7.8, 34: 8.1, 35: 8.4, 36: 8.7, 37: 9.0, 38: 9.4, 39: 9.7,
        40: 10.0
    };
    return gradeTable[correctAnswers] || 1.0;
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
    const grade = calculateGrade(score);
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
        <h3 style="margin-top: 30px; color: #00d4ff;">Gedetailleerde Resultaten:</h3>
        <p style="color: #ccc; margin-bottom: 15px;">
            <span style="color: #00ff88;">✓ ${correctCount} correct</span> • 
            <span style="color: #ff4444;">✗ ${incorrectCount} fout</span>
        </p>
    `;
    
    const letters = ['A', 'B', 'C', 'D'];
    
    activeQuestions.forEach((q, index) => {
        const isCorrect = answers[index] === q.correct;
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

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    answers = [];
    activeQuestions = [];
    answered = false;
    isExamMode = false;
    
    // Clean up exam results if present
    const existingResults = document.getElementById('end-screen').querySelector('.exam-results');
    if (existingResults) {
        existingResults.remove();
    }
    
    document.getElementById('end-screen').classList.add('hidden');
    document.getElementById('start-screen').classList.remove('hidden');
}
