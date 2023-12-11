---
layout: post
toc: false
description:
courses: { csp: {week: 14} }
permalink: binary-guessing-game
type: ccc
---
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="game.css">
    <title>Binary to Decimal Guessing Game</title>
  </head>
  <body>
    <div class="container">
      <h3>Binary to Decimal Guessing Game</h3>
      <p id="binaryOutput"></p>
      <label for="userGuess">Your Guess:</label>
      <input type="text" id="userGuess">
      <button onclick="checkGuess()">Check Guess</button>
      <p id="result"></p>
      <p>Score: <span id="score">0</span></p>
      <button onclick="generateRandomBinary()">Generate New Binary</button>
    </div>
    <script type="text/javascript" src="text.js"></script>
  </body>
</html>
