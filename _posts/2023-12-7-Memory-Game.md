---
layout: post
toc: false
description:
courses: { csp: {week: 14} }
permalink: memory-game
type: Arcade
---

<html>
<head>
    <title>Binary Memory Game</title>
    <style>
        .container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 50px;
        }
       .game-board {
            width: 400px;
            height: 400px;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 5px;
            border-collapse: collapse;
        }
        .game-board.hard {
            grid-template-columns: repeat(5, 1fr);
            background-color: black;
        }
        .game-board.hardest {
            grid-template-columns: repeat(6, 1fr);
            background-color: black;
        }  
        .card {
            background-color: blue;
            color: black;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            cursor: pointer;
            position: relative; /* Added for hover hint */
        }
        .hover-hint {
            display: none;
            position: absolute;
            bottom: 5px;
            left: 5px;
            background-color: rgba(255, 255, 255, 0.7);
            padding: 5px;
            border-radius: 5px;
            font-size: 12px;
        }
        .card:hover .hover-hint {
            display: block;
        }
        #timer, #score, #timer2, #score2, #timer3, #score3 {
            margin: 20px 0;
            font-size: 20px;
        }
    </style>
</head>
<body>
    <h1> Memory Game </h1>
    <p>Flip the cards until you find the matching pair, test your memory. See how long it takes you to do all 3 levels of difficulty, or try just one! Hover over a card to reveal if it is a binary number or a decimal.</p>
    <div class="container">
        <div class="game-section">
            <div id="timer">Time: 0 seconds</div>
            <div id="score">Score: 0</div>
            <div id="gameBoard" class="game-board"></div>
        </div>
        <div class="game-section">
            <div id="timer2">Time: 0 seconds</div>
            <div id="score2">Score: 0</div>
            <div id="gameBoard2" class="game-board hard"></div>
        </div>
        <div class="game-section">
            <div id="timer3">Time: 0 seconds</div>
            <div id="score3">Score: 0</div>
            <div id="gameBoard3" class="game-board hardest"></div>
        </div>
    </div>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            function shuffle(array) {
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
            }
            function initGame(gameBoardId, timerId, scoreId, numPairs) {
                const gameBoard = document.getElementById(gameBoardId);
                const timerDisplay = document.getElementById(timerId);
                const scoreDisplay = document.getElementById(scoreId);
                const binaryNumbers = Array.from({ length: numPairs }, (_, i) => i.toString(2).padStart(3, '0'));
                const decimalNumbers = binaryNumbers.map(bin => parseInt(bin, 2).toString());
                let cards = [...binaryNumbers, ...decimalNumbers];
                let cardsRevealed = new Array(numPairs * 2).fill(false);
                let selectedCards = [];
                let timeElapsed = 0;
                let score = 0;
                let timer = setInterval(() => updateTimer(timerDisplay, timeElapsed++), 1000);

                shuffle(cards);
                createGameBoard(gameBoard, cards);

                function createGameBoard(board, cards) {
                    cards.forEach((number, index) => {
                        const card = document.createElement('div');
                        card.className = 'card';
                        card.setAttribute('data-number', number);
                        card.setAttribute('data-index', index);

                        const decimal = number.length === 3 ? parseInt(number, 2) : number;
                        card.setAttribute('data-decimal', decimal);

                        // Create hover hint element
                        const hoverHint = document.createElement('span');
                        hoverHint.className = 'hover-hint';
                        hoverHint.textContent = number.length === 3 ? 'Binary Number' : 'Decimal';
                        card.appendChild(hoverHint);

                        card.addEventListener('click', () => revealCard(card, index, board, cardsRevealed, selectedCards, scoreDisplay, score));
                        board.appendChild(card);
                    });
                }
                function updateTimer(display, elapsed) {
                    display.textContent = 'Time: ' + elapsed + ' seconds';
                }

                function revealCard(card, index, board, cardsRevealed, selectedCards, scoreDisplay, score) {
                    if (cardsRevealed[index] || selectedCards.includes(index)) return;
                    card.style.backgroundColor = 'white';
                    let cardContent = board.children[index].getAttribute('data-number');
                    card.textContent = cardContent;
                    selectedCards.push(index);

                    if (selectedCards.length === 2) {
                        setTimeout(() => checkMatch(board, cardsRevealed, selectedCards, scoreDisplay, score), 500);
                    }
                }

                function checkMatch(board, cardsRevealed, selectedCards, scoreDisplay, score) {
                    const [index1, index2] = selectedCards;
                    const card1 = board.children[index1];
                    const card2 = board.children[index2];

                    const number1 = card1.getAttribute('data-decimal');
                    const number2 = card2.getAttribute('data-decimal');

                    const isMatch = number1 === number2;

                    if (isMatch) {
                        console.log("Match found!");
                        cardsRevealed[index1] = cardsRevealed[index2] = true;
                        score++;
                        scoreDisplay.textContent = 'Score: ' + score;
                    } else {
                        console.log("No match.");
                        setTimeout(() => {
                            hideCard(card1);
                            hideCard(card2);
                        }, 1000);
                    }

                    selectedCards.length = 0;
                }

                function hideCard(card) {
                    card.style.backgroundColor = 'blue';
                    card.textContent = '';
                }
            }

            initGame('gameBoard', 'timer', 'score', 8);
            initGame('gameBoard2', 'timer2', 'score2', 10);
            initGame('gameBoard3', 'timer3', 'score3', 12);
        });
    </script>
</body>
</html>

