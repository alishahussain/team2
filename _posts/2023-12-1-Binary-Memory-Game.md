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
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            cursor: pointer;
        }
        #timer {
            margin: 20px 0;
            font-size: 20px;
        }
    </style>
</head>
<body>
    <h1> Memory Game </h1>
    <p> Flip the cards until you find the matching pair, test your memory. Watch the time, Don't take too long! </p>
    <div id="timer">Time: 0 seconds</div>
    <div id="gameBoard" class="game-board"></div>
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const gameBoard = document.getElementById('gameBoard');
            const timerDisplay = document.getElementById('timer');
            const binaryNumbers1 = Array.from({ length: 8 }, (_, i) => i.toString(2).padStart(4, '0'));
            const binaryNumbers2 = Array.from({ length: 8 }, (_, i) => (i + 8).toString(2).padStart(4, '0')); // new set of binary numbers
            let cards = [...binaryNumbers1, ...binaryNumbers1];
            let cardsRevealed = new Array(16).fill(false);
            let selectedCards = [];
            let timeElapsed = 0;
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
                card.textContent = index < 8 ? binaryNumbers2[index] : binaryNumbers2[index - 8]; // Display number from the second set on reverse
                selectedCards.push(index);

                if (selectedCards.length === 2) {
                    setTimeout(checkMatch, 500);
                }
            }

            function checkMatch() {
                const [index1, index2] = selectedCards;
                const card1 = gameBoard.children[index1];
                const card2 = gameBoard.children[index2];

                if (card1.getAttribute('data-number') === card2.getAttribute('data-number')) {
                    console.log("Match found!");
                    cardsRevealed[index1] = cardsRevealed[index2] = true;
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

