const words = ["easy", "world", "team", "binary", "simple", "zebra", "square", "jar", "war","bear"];
let currentWord = "";
let lastWord = "";
let score = 0;
let strikes = 0;

function generateRandomWord() {
    let newWord;
    do {
        const randomIndex = Math.floor(Math.random() * words.length);
        newWord = words[randomIndex];
    } while (newWord === lastWord);
    
    lastWord = newWord;
    return newWord;
}

function convertToBinary(word) {
    return word.split('').map(char => char.charCodeAt(0).toString(2)).join(' ');
}

function displayNewWord() {
    currentWord = generateRandomWord();
    const binaryRepresentation = convertToBinary(currentWord);
    document.getElementById("word-display").innerText = binaryRepresentation;
}

function checkAnswer() {
    const userInput = document.getElementById("user-input").value.toLowerCase();
    if (userInput === currentWord) {
        score++;
        document.getElementById("score").innerText = `Score: ${score}`;
        displayNewWord();
        document.getElementById("user-input").value = "";
    } else {
        strikes++;
        document.getElementById("strikes").innerText = `Strikes: ${strikes}`;
        if (strikes === 3) {
            alert(`Game Over! Your final score is ${score}.`);
            resetGame();
        } else {
            displayNewWord();
            document.getElementById("user-input").value = "";
        }
    }
}

function resetGame() {
    score = 0;
    strikes = 0;
    document.getElementById("score").innerText = "Score: 0";
    document.getElementById("strikes").innerText = "Strikes: 0";
    displayNewWord();
}

// Initial setup
window.onload = function () {
    displayNewWord();
};
