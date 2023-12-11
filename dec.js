let decimalOutput = document.getElementById("decimalOutput");
let userBinaryInput = document.getElementById("userBinary");
let resultOutput = document.getElementById("result");
let scoreOutput = document.getElementById("score");

let currentDecimal;

function generateRandomDecimal() {
  currentDecimal = Math.floor(Math.random() * 256);
  decimalOutput.textContent = currentDecimal;
}

function checkGuess() {
  let userBinaryGuess = userBinaryInput.value.trim();

  if (!userBinaryGuess.match(/^[01]+$/) || userBinaryGuess === "") {
    resultOutput.textContent = "Invalid guess. Please enter a binary number.";
  } else {
    let userDecimalGuess = parseInt(userBinaryGuess, 2);

    if (userDecimalGuess === currentDecimal) {
      resultOutput.textContent = "Congratulations! Your guess is correct!";
      incrementScore();
    } else {
      resultOutput.textContent = `Sorry, the correct answer is ${currentDecimal.toString(2)}.`;
    }

    // Reset the user input
    userBinaryInput.value = "";

    // Generate a new random decimal
    generateRandomDecimal();
  }
}

function incrementScore() {
  let score = parseInt(scoreOutput.textContent);
  score++;
  scoreOutput.textContent = score;
}

// Initial setup
generateRandomDecimal();
