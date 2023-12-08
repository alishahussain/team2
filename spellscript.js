const words = ["hi", "meat", "team", "binary", "simple", "car", "tin", "man", "war","bear", "no", "ew", "pop", "me", "fix"];
let currentWord = "";
let lastWord = "";
let score = 0;
let strikes = 0;

function generateRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

function convertToBinary(word) {
    return word.split('').map(char => {
        const binary = char.charCodeAt(0).toString(2);
        return '0'.repeat(8 - binary.length) + binary; // Ensure each binary representation is 8 bits
    }).join(' ');
}

function convertToText(binary) {
    const binaryArray = binary.split(' ');
    return binaryArray.map(bin => String.fromCharCode(parseInt(bin, 2))).join('');
}

function randomlyChooseTranslationDirection() {
    return Math.random() < 0.5; // 50% chance of true (binary to text) or false (text to binary)
}

function displayNewWord() {
    let newWord;
    do {
        newWord = generateRandomWord();
    } while (newWord === lastWord);
    
    lastWord = newWord;
    
    const isBinaryToText = randomlyChooseTranslationDirection();
    const displayWord = isBinaryToText ? convertToBinary(newWord) : newWord;
    currentWord = newWord;
    
    document.getElementById("word-display").innerText = displayWord;
}

function checkAnswer() {
    const userInput = document.getElementById("user-input").value.toLowerCase();
    const isBinaryToText = document.getElementById("word-display").innerText.includes(' '); // Check if the displayed word is in binary
    const correctAnswer = isBinaryToText ? currentWord : convertToBinary(currentWord);
    
    if (userInput === correctAnswer) {
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