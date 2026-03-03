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
let isIQMode = false;   // true when quiz has mode:'iq' — no per-question feedback, points-based IQ result

// Check which page we are on
// ─── PACMAN EASTER EGG ──────────────────────────────────────────────────────
let pacmanKeySequence = '';
let pacmanTimeout;

document.addEventListener('keydown', (e) => {
    // Track keyboard input for "pacman" sequence
    const key = e.key.toLowerCase();
    
    // Only add letter keys
    if (/^[a-z]$/.test(key)) {
        pacmanKeySequence += key;
        
        // Keep only the last 6 characters
        if (pacmanKeySequence.length > 6) {
            pacmanKeySequence = pacmanKeySequence.slice(-6);
        }
        
        // Check if sequence ends with "pacman"
        if (pacmanKeySequence.endsWith('pacman')) {
            e.preventDefault();
            openPacmanGame();
            pacmanKeySequence = ''; // Reset after triggering
        }
        
        // Reset sequence after 2 seconds of inactivity
        clearTimeout(pacmanTimeout);
        pacmanTimeout = setTimeout(() => {
            pacmanKeySequence = '';
        }, 2000);
    }
});

function openPacmanGame() {
    let modal = document.getElementById('pacman-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'pacman-modal';
        modal.className = 'pacman-modal';
        modal.innerHTML = `
            <div class="pacman-content">
                <div class="pacman-header">
                    <h2>🎮 Pac-Man</h2>
                    <button class="pacman-close" onclick="closePacmanGame()">&times;</button>
                </div>
                <div class="pacman-game-container">
                    <canvas id="pacman-canvas" width="400" height="400"></canvas>
                    <div class="pacman-instructions">
                        <p><strong>⬅️➡️⬆️⬇️</strong> Beweging | <strong>ESC</strong> Afsluiten</p>
                        <p>Eet alle puntjes! Vermijd de spoken! 👻</p>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        modal.style.display = 'flex';
        
        // Start the game
        initPacmanGame();
    } else {
        modal.style.display = 'flex';
        initPacmanGame();
    }
}

function closePacmanGame() {
    const modal = document.getElementById('pacman-modal');
    if (modal) {
        modal.style.display = 'none';
        if (window.pacmanGameRunning) {
            window.pacmanGameRunning = false;
        }
    }
}

function initPacmanGame() {
    const canvas = document.getElementById('pacman-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const tileSize = 20;
    const cols = canvas.width / tileSize;
    const rows = canvas.height / tileSize;
    
    // Game state
    const game = {
        pacman: { x: 5, y: 5, dx: 0, dy: 0, nextDx: 0, nextDy: 0 },
        ghosts: [
            { x: 10, y: 8, dx: -1, dy: 0, color: '#ff0000' },
            { x: 12, y: 8, dx: 1, dy: 0, color: '#ffb6c1' },
            { x: 11, y: 10, dx: 0, dy: -1, color: '#00ffff' }
        ],
        pellets: new Set(),
        powerPellets: new Set(),
        score: 0,
        gameOver: false,
        won: false
    };
    
    // Initialize pellets
    for (let x = 1; x < cols - 1; x++) {
        for (let y = 1; y < rows - 1; y++) {
            // Avoid placing pellets at starting positions
            if (!((x === 5 && y === 5) || (x >= 9 && x <= 12 && y >= 7 && y <= 10))) {
                if (Math.random() < 0.15) {
                    game.pellets.add(`${x},${y}`);
                }
            }
        }
    }
    
    // Place some power pellets
    for (let i = 0; i < 4; i++) {
        let x, y;
        do {
            x = Math.floor(Math.random() * (cols - 2)) + 1;
            y = Math.floor(Math.random() * (rows - 2)) + 1;
        } while (game.pellets.has(`${x},${y}`) || game.powerPellets.has(`${x},${y}`));
        game.powerPellets.add(`${x},${y}`);
    }
    
    // Keyboard controls
    const keys = {};
    const handleKey = (e) => {
        keys[e.key.toLowerCase()] = e.type === 'keydown';
        
        if (e.key === 'Escape') {
            e.preventDefault();
            closePacmanGame();
        }
        
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
            e.preventDefault();
            
            if (e.key === 'ArrowUp') { game.pacman.nextDy = -1; game.pacman.nextDx = 0; }
            if (e.key === 'ArrowDown') { game.pacman.nextDy = 1; game.pacman.nextDx = 0; }
            if (e.key === 'ArrowLeft') { game.pacman.nextDx = -1; game.pacman.nextDy = 0; }
            if (e.key === 'ArrowRight') { game.pacman.nextDx = 1; game.pacman.nextDy = 0; }
        }
    };
    
    document.addEventListener('keydown', handleKey);
    document.addEventListener('keyup', handleKey);
    
    function canMove(x, y) {
        if (x < 0 || x >= cols || y < 0 || y >= rows) return false;
        // Simple boundary check
        return true;
    }
    
    function update() {
        if (game.gameOver || game.won) return;
        
        // Update Pac-Man direction
        if (canMove(game.pacman.x + game.pacman.nextDx, game.pacman.y + game.pacman.nextDy)) {
            game.pacman.dx = game.pacman.nextDx;
            game.pacman.dy = game.pacman.nextDy;
        }
        
        // Move Pac-Man
        if (canMove(game.pacman.x + game.pacman.dx, game.pacman.y + game.pacman.dy)) {
            game.pacman.x += game.pacman.dx;
            game.pacman.y += game.pacman.dy;
        }
        
        // Check pellet collision
        const pelletKey = `${game.pacman.x},${game.pacman.y}`;
        if (game.pellets.has(pelletKey)) {
            game.pellets.delete(pelletKey);
            game.score += 10;
        }
        if (game.powerPellets.has(pelletKey)) {
            game.powerPellets.delete(pelletKey);
            game.score += 50;
        }
        
        // Win condition
        if (game.pellets.size === 0 && game.powerPellets.size === 0) {
            game.won = true;
        }
        
        // Update ghosts with simple AI
        game.ghosts.forEach(ghost => {
            // Simple random direction changes
            if (Math.random() < 0.02) {
                const dirs = [[0, -1], [0, 1], [-1, 0], [1, 0]];
                const newDir = dirs[Math.floor(Math.random() * dirs.length)];
                ghost.dx = newDir[0];
                ghost.dy = newDir[1];
            }
            
            // Move ghost
            if (canMove(ghost.x + ghost.dx, ghost.y + ghost.dy)) {
                ghost.x += ghost.dx;
                ghost.y += ghost.dy;
            } else {
                // Change direction if hitting wall
                const dirs = [[0, -1], [0, 1], [-1, 0], [1, 0]];
                const newDir = dirs[Math.floor(Math.random() * dirs.length)];
                ghost.dx = newDir[0];
                ghost.dy = newDir[1];
            }
            
            // Check collision with Pac-Man
            if (ghost.x === game.pacman.x && ghost.y === game.pacman.y) {
                game.gameOver = true;
            }
        });
    }
    
    function draw() {
        // Clear canvas
        ctx.fillStyle = '#0a0a0a';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw grid border
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 1;
        
        for (let x = 0; x <= cols; x++) {
            ctx.beginPath();
            ctx.moveTo(x * tileSize, 0);
            ctx.lineTo(x * tileSize, canvas.height);
            ctx.stroke();
        }
        
        for (let y = 0; y <= rows; y++) {
            ctx.beginPath();
            ctx.moveTo(0, y * tileSize);
            ctx.lineTo(canvas.width, y * tileSize);
            ctx.stroke();
        }
        
        // Draw pellets
        ctx.fillStyle = '#dda0dd';
        game.pellets.forEach(key => {
            const [x, y] = key.split(',').map(Number);
            ctx.beginPath();
            ctx.arc(x * tileSize + tileSize / 2, y * tileSize + tileSize / 2, 3, 0, Math.PI * 2);
            ctx.fill();
        });
        
        // Draw power pellets
        ctx.fillStyle = '#ffff00';
        game.powerPellets.forEach(key => {
            const [x, y] = key.split(',').map(Number);
            ctx.beginPath();
            ctx.arc(x * tileSize + tileSize / 2, y * tileSize + tileSize / 2, 5, 0, Math.PI * 2);
            ctx.fill();
        });
        
        // Draw Pac-Man
        ctx.fillStyle = '#ffff00';
        ctx.beginPath();
        ctx.arc(game.pacman.x * tileSize + tileSize / 2, game.pacman.y * tileSize + tileSize / 2, 8, 0, Math.PI * 2);
        ctx.fill();
        
        // Draw ghosts
        game.ghosts.forEach(ghost => {
            ctx.fillStyle = ghost.color;
            ctx.fillRect(ghost.x * tileSize + 2, ghost.y * tileSize + 2, tileSize - 4, tileSize - 4);
            
            // Eyes
            ctx.fillStyle = 'white';
            ctx.fillRect(ghost.x * tileSize + 4, ghost.y * tileSize + 4, 4, 4);
            ctx.fillRect(ghost.x * tileSize + 12, ghost.y * tileSize + 4, 4, 4);
        });
        
        // Draw score
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 14px Arial';
        ctx.fillText(`Score: ${game.score}`, 10, 18);
        
        // Draw status messages
        if (game.gameOver) {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#ff0000';
            ctx.font = 'bold 24px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('GAME OVER!', canvas.width / 2, canvas.height / 2);
            ctx.fillText(`Score: ${game.score}`, canvas.width / 2, canvas.height / 2 + 40);
            ctx.textAlign = 'left';
        } else if (game.won) {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#00ff00';
            ctx.font = 'bold 24px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('JE HEBT GEWONNEN!', canvas.width / 2, canvas.height / 2);
            ctx.fillText(`Score: ${game.score}`, canvas.width / 2, canvas.height / 2 + 40);
            ctx.textAlign = 'left';
        }
    }
    
    window.pacmanGameRunning = true;
    const gameLoop = setInterval(() => {
        if (!window.pacmanGameRunning) {
            clearInterval(gameLoop);
            document.removeEventListener('keydown', handleKey);
            document.removeEventListener('keyup', handleKey);
            return;
        }
        
        update();
        draw();
    }, 100);
}

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
                                <h3 style="display: flex; align-items: baseline; gap: 8px;">
                                    <span style=\"color: #00d4ff;\">${quiz.title}</span>
                                    ${quiz.subtitle ? `<span class='quiz-subtitle' style='font-size:0.65em; color:#b0b0b0; font-weight:400; line-height:1;'>${quiz.subtitle}</span>` : ''}
                                </h3>
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
        isIQMode = data.mode === 'iq';

        // Zet subtitel indien aanwezig
        const subtitle = quizInfo.subtitle || 'kwartiel 2';
        const subtitleDiv = document.getElementById('quiz-subtitle');
        if (subtitleDiv) {
            subtitleDiv.textContent = subtitle;
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
            btn.onclick = () => startQuiz(cat.id);
            menu.appendChild(btn);
        });

        document.getElementById('quiz-title').textContent = data.title;
        document.title = data.title;

        // IQ mode: skip category menu and start immediately
        if (isIQMode && data.categories.length === 1) {
            startQuiz(data.categories[0].id);
            return;
        }

    } catch (error) {
        console.error('Error loading quiz:', error);
        alert('Er is een fout opgetreden bij het laden van de quiz.');
    }
}

function startQuiz(category) {
    const cat = categories[category];
    
    // Check if this is exam mode (IQ mode or category id contains 'examen')
    isExamMode = isIQMode || category.toLowerCase().includes('examen');
    
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
    isExamMode = false;
    isIQMode = false;
    
    // Clean up exam results if present
    const existingResults = document.getElementById('end-screen').querySelector('.exam-results');
    if (existingResults) {
        existingResults.remove();
    }
    
    document.getElementById('end-screen').classList.add('hidden');
    document.getElementById('start-screen').classList.remove('hidden');
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
