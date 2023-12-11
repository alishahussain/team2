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
        border-collapse: collapse; /* Add this line to ensure borders collapse into a single line */
    }
        .game-board.hard {
            grid-template-columns: repeat(5, 1fr); /* More columns for higher difficulty */
            background-color: black; /* Different background for distinction */
        }
        .game-board.hardest {
            grid-template-columns: repeat(6, 1fr); /* Even more columns for the highest difficulty */
            background-color: black; /* Different background for distinction */
    }  
      .card {
        background-color: blue;
        color: black;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        cursor: pointer;
        border: 1px solid #39FF14; /* Set border color to neon green */
        position: relative;
    }   
    .card:hover::after {
    content: attr(data-type);
    position: absolute;
    bottom: 100%; /* Position the hint above the card */
    left: 50%;
    transform: translateX(-50%);
    background-color: #fff;
    padding: 5px;
    border-radius: 5px;
    font-size: 14px;
    color: black;
    white-space: nowrap; /* Prevents the text from wrapping */
    z-index: 100; /* Ensures the hint is above other elements */
    margin-bottom: 5px; /* Adds some space between the hint and the card */
}
        #timer, #score, #timer2, #score2, #timer3, #score3 {
            margin: 20px 0;
            font-size: 20px;
        }
    </style>
</head>
<body>
    <h1> Memory Game </h1>
    <p> Flip the cards until you find the matching pair, test your memory. See how long it takes you to do all 3 levels of difficulty, or try just one! Hover over a card to reveal if it is a binary number or a decimal. In case you forgot: To comvert binary numbers to their corresponding decimals, always use the base of 2, and go rigth to left. Example: 001= 2^0 x 1= (1 x 1) 1, 2^1 x 0 = (2 x 0) 0, 2^2 x 0 (4 x 0)= 0, 1+0+0= 1. 1 is the corresponding decical to 001. </p>
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
                        card.setAttribute('data-type', number.length === 3 ? 'Binary Number' : 'Decimal');

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

                    selectedCards.length = 0; // Clear the array
                }

                function hideCard(card) {
                    card.style.backgroundColor = 'blue';
                    card.textContent = '';
                }
            }

            // Initialize the first game
            initGame('gameBoard', 'timer', 'score', 8);

            // Initialize the second game with higher difficulty
            initGame('gameBoard2', 'timer2', 'score2', 10);

            // Initialize the third game with the highest difficulty
            initGame('gameBoard3', 'timer3', 'score3', 12);
        });
    </script>
</body>
</html>