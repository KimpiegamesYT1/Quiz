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
    
    const letters = ['A', 'B', 'C', 'D'];
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
    document.getElementById('next-btn').textContent = isExamMode ? 'Volgende' : 'Controleer';
    document.getElementById('feedback').classList.add('hidden');
    answered = false;
    updateProgress();
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
    const scoreDiv = document.getElementById('score');
    scoreDiv.textContent = `${score}/${activeQuestions.length} (${percentage}%)`;
    
    // Determine pass/fail for exam (65% = 26/40 for passing)
    const passed = percentage >= 65;
    
    if (passed && percentage >= 90) {
        scoreDiv.className = 'score excellent';
        document.getElementById('score-text').innerHTML = '<strong>Uitstekend geslaagd!</strong><br>Je bent helemaal klaar voor het examen!';
    } else if (passed && percentage >= 75) {
        scoreDiv.className = 'score good';
        document.getElementById('score-text').innerHTML = '<strong>Goed geslaagd!</strong><br>Je hebt een mooie score behaald!';
    } else if (passed) {
        scoreDiv.className = 'score average';
        document.getElementById('score-text').innerHTML = '<strong>Geslaagd!</strong><br>Je hebt de 65% grens gehaald. Misschien nog wat oefenen voor meer zekerheid?';
    } else {
        scoreDiv.className = 'score poor';
        document.getElementById('score-text').innerHTML = '<strong>Helaas niet geslaagd.</strong><br>Je hebt minimaal 26/40 (65%) nodig. Bestudeer onderstaande antwoorden en probeer opnieuw!';
    }
    
    // Show detailed results
    const resultsContainer = document.createElement('div');
    resultsContainer.className = 'exam-results';
    resultsContainer.innerHTML = '<h3 style="margin-top: 30px; color: #00d4ff;">Gedetailleerde Resultaten:</h3>';
    
    const letters = ['A', 'B', 'C', 'D'];
    
    activeQuestions.forEach((q, index) => {
        const isCorrect = answers[index] === q.correct;
        const resultDiv = document.createElement('div');
        resultDiv.className = `exam-result-item ${isCorrect ? 'correct' : 'incorrect'}`;
        
        resultDiv.innerHTML = `
            <div class="result-header">
                <span class="result-icon">${isCorrect ? '✓' : '✗'}</span>
                <strong>Vraag ${index + 1}:</strong> ${q.question}
            </div>
            <div class="result-details">
                <div>Jouw antwoord: <strong>${letters[answers[index]]}. ${q.options[answers[index]]}</strong></div>
                ${!isCorrect ? `<div class="correct-answer-detail">Correct antwoord: <strong>${letters[q.correct]}. ${q.options[q.correct]}</strong></div>` : ''}
                <div class="explanation-detail">💡 ${q.explanation}</div>
            </div>
        `;
        
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
