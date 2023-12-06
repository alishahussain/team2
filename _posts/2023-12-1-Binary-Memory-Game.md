---
layout: post
toc: false
description:
courses: { csp: {week: 14} }
permalink: memory-game
type: ccc
---

<html>
<head>
    <title>Binary Memory Game</title>
    <style>
        .game-board {
            width: 400px;
            height: 400px;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 5px;
        }
        .card {
            background-color: blue;
            color: black; /* Set text color to black */
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            cursor: pointer;
        }
        #timer, #score {
            margin: 20px 0;
            font-size: 20px;
        }
    </style>
</head>
<body>
    <h1> Memory Game </h1>
    <p> Flip the cards until you find the matching pair, test your memory. Watch the time, Don't take too long! </p>
    <div id="timer">Time: 0 seconds</div>
    <div id="score">Score: 0</div>
    <div id="gameBoard" class="game-board"></div>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const gameBoard = document.getElementById('gameBoard');
            const timerDisplay = document.getElementById('timer');
            const scoreDisplay = document.getElementById('score');
            const binaryNumbers = Array.from({ length: 8 }, (_, i) => i.toString(2).padStart(3, '0'));
            const exponents = binaryNumbers.map((_, i) => i.toString());
            let cards = [...binaryNumbers, ...exponents]; // Pair each binary number with its exponent
            let cardsRevealed = new Array(16).fill(false);
            let selectedCards = [];
            let timeElapsed = 0;
            let score = 0;
            let timer;

            shuffle(cards);

            cards.forEach((number, index) => {
                const card = document.createElement('div');
                card.className = 'card';
                card.setAttribute('data-number', number);
                card.setAttribute('data-index', index);
                card.addEventListener('click', () => revealCard(card, index));
                gameBoard.appendChild(card);
            });

            timer = setInterval(updateTimer, 1000);

            function updateTimer() {
                timeElapsed++;
                timerDisplay.textContent = 'Time: ' + timeElapsed + ' seconds';
            }

            function revealCard(card, index) {
                if (cardsRevealed[index] || selectedCards.includes(index)) return;

                card.style.backgroundColor = 'white';
                let cardContent = index < 8 ? binaryNumbers[index] : exponents[index - 8];
                card.textContent = cardContent;
                selectedCards.push(index);

                if (selectedCards.length === 2) {
                    setTimeout(checkMatch, 500);
                }
            }

            function checkMatch() {
                const [index1, index2] = selectedCards;
                const card1 = gameBoard.children[index1];
                const card2 = gameBoard.children[index2];
                const isMatch = (index1 < 8 && card2.textContent === index1.toString()) ||
                                (index2 < 8 && card1.textContent === index2.toString());

                if (isMatch) {
                    console.log("Match found!");
                    cardsRevealed[index1] = cardsRevealed[index2] = true;
                    score += 1;
                    scoreDisplay.textContent = 'Score: ' + score;
                } else {
                    console.log("No match.");
                    setTimeout(() => {
                        hideCard(card1);
                        hideCard(card2);
                    }, 1000);
                }

                selectedCards = [];
                if (cardsRevealed.every(val => val)) {
                    clearInterval(timer);
                }
            }

            function hideCard(card) {
                card.style.backgroundColor = 'blue';
                card.textContent = '';
            }

            function shuffle(array) {
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
            }
        });
    </script>
</body>
</html>



