---
layout: post
toc: false
description:
courses: { csp: {week: 14} }
permalink: decimal-guessing-game
type: Arcade
---

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="dec.css">
  <title>Decimal to Binary Guessing Game</title>
</head>
<body>
  <div class="container">
    <h3>Decimal to Binary Guessing Game</h3>
    <p id="decimalOutput"></p>
    <label for="userBinary">Your Guess:</label>
    <input type="text" id="userBinary">
    <button onclick="checkGuess()">Check Guess</button>
    <p id="result"></p>
    <p>Score: <span id="score">0</span></p>
    <button onclick="generateRandomDecimal()">Generate New Decimal</button>
  </div>
  <script type="text/javascript" src="dec.js"></script>
</body>
</html>







