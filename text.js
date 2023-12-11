let binaryOutput = document.getElementById("binaryOutput");
let userGuessInput = document.getElementById("userGuess");
let resultOutput = document.getElementById("result");
let scoreOutput = document.getElementById("score");

let currentBinary;

function generateRandomBinary() {
  let binary = Math.floor(Math.random() * 256).toString(2);
  binaryOutput.textContent = binary;
  currentBinary = binary;
}

function checkGuess() {
  let userGuess = userGuessInput.value.trim();

  if (!userGuess.match(/^\d+$/) || userGuess === "") {
    resultOutput.textContent = "Invalid guess. Please enter a decimal number.";
  } else {
    if (parseInt(userGuess) === parseInt(currentBinary, 2)) {
      resultOutput.textContent = "Congratulations! Your guess is correct!";
      incrementScore();
    } else {
      resultOutput.textContent = `Sorry, the correct answer is ${parseInt(currentBinary, 2)}.`;
    }

    // Reset the user input
    userGuessInput.value = "";

    // Generate a new random binary
    generateRandomBinary();
  }
}

function incrementScore() {
  let score = parseInt(scoreOutput.textContent);
  score++;
  scoreOutput.textContent = score;
}

// Initial setup
generateRandomBinary();
