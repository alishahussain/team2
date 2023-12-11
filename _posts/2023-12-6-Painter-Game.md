---
layout: post
toc: false
description:
courses: { csp: {week: 14} }
permalink: binary-painter
type: Arcade
---

<title>Binary Painter Game</title>
<style>
    #container {
        display: flex;
        justify-content: space-between;
        position: relative;
    }

    #gridCanvas {
        border: 1px solid black;
    }

    #controls {
        width: 200px;
        margin-right: 20px;
    }

    .slider {
        width: 100%;
        margin-bottom: 10px;
    }

    #customColorInput {
        margin-top: 20px;
        position: relative;
    }

    #customColorText {
        margin-bottom: 5px;
        font-weight: bold;
        color: #00ff00; /* Neon green */
    }

    #customColorTextInput {
        width: calc(100% - 10px);
        padding: 5px;
        border: 2px solid #00ff00; /* Neon green outline */
        color: #00ff00;
        margin-bottom: 5px;
        outline: none; /* Remove default input outline */
    }

    #customColorTextInput::placeholder {
        color: #00ff00;
    }

    #resetButton {
        background-color: transparent;
        color: #ff0000; /* Red text */
        border: 2px solid #ff0000; /* Red border */
        padding: 10px;
        cursor: pointer;
        font-size: 16px;
        position: absolute;
        bottom: 20px;
        right: 20px;
    }

    #resetButton:hover {
        background-color: #ff0000; /* Red background on hover */
        color: #ffffff; /* White text on hover */
    }
</style>
<h1>Binary Painter Game</h1>
<div id="container">
    <canvas id="gridCanvas" width="400" height="400"></canvas>
    <div id="controls">
        <div class="slider">
            <label for="redSlider">Red:</label>
            <input type="range" id="redSlider" min="0" max="255" value="0">
            <span id="redValue">0</span>
        </div>
        <div class="slider">
            <label for="greenSlider">Green:</label>
            <input type="range" id="greenSlider" min="0" max="255" value="0">
            <span id="greenValue">0</span>
        </div>
        <div class="slider">
            <label for="blueSlider">Blue:</label>
            <input type="range" id="blueSlider" min="0" max="255" value="0">
            <span id="blueValue">0</span>
        </div>
        <div id="customColorInput">
            <div id="customColorInput">Feeling ready? Try some custom binary! Add your own 24-bit binary color:</div>
            <input type="text" id="customColorTextInput" placeholder="Type here">
            <button id="applyCustomColorButton" onclick="applyCustomColor()">Apply</button>
        </div>
    </div>
    <button id="resetButton" onclick="resetCanvas()">Reset</button>
</div>
<div id="binaryValue"></div>
<script>
    const canvas = document.getElementById('gridCanvas');
    const context = canvas.getContext('2d');
    const GRID_WIDTH = 400;
    const GRID_HEIGHT = 400;
    const BLOCK_SIZE = 20;

    const redSlider = document.getElementById('redSlider');
    const greenSlider = document.getElementById('greenSlider');
    const blueSlider = document.getElementById('blueSlider');
    const customColorTextInput = document.getElementById('customColorTextInput');

    const redValue = document.getElementById('redValue');
    const greenValue = document.getElementById('greenValue');
    const blueValue = document.getElementById('blueValue');

    const binaryValue = document.getElementById('binaryValue');

    redSlider.addEventListener('input', updateColor);
    greenSlider.addEventListener('input', updateColor);
    blueSlider.addEventListener('input', updateColor);

    canvas.addEventListener('mousedown', handleMouseDown);

    function updateColor() {
        const red = redSlider.value;
        const green = greenSlider.value;
        const blue = blueSlider.value;

        redValue.textContent = red;
        greenValue.textContent = green;
        blueValue.textContent = blue;

        const color = `rgb(${red}, ${green}, ${blue})`;
        binaryValue.textContent = `Binary Value: ${rgbToBinary(color)}`;
    }

    function drawGrid() {
        for (let x = 0; x < GRID_WIDTH; x += BLOCK_SIZE) {
            for (let y = 0; y < GRID_HEIGHT; y += BLOCK_SIZE) {
                context.beginPath();
                context.rect(x, y, BLOCK_SIZE, BLOCK_SIZE);
                context.fillStyle = 'rgb(0, 0, 0)'; // Black background
                context.fill();
                context.lineWidth = 2;
                context.strokeStyle = 'rgb(255, 255, 255)';
                context.stroke();
            }
        }
    }

    function draw() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawGrid();
    }

    function handleMouseDown(event) {
        const mousePos = getMousePos(event);
        const gridX = Math.floor(mousePos.x / BLOCK_SIZE);
        const gridY = Math.floor(mousePos.y / BLOCK_SIZE);

        const red = redSlider.value;
        const green = greenSlider.value;
        const blue = blueSlider.value;

        const color = `rgb(${red}, ${green}, ${blue})`;
        fillCell(gridX, gridY, color);
    }

    function fillCell(gridX, gridY, color) {
        context.beginPath();
        context.rect(gridX * BLOCK_SIZE, gridY * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);
        context.fillStyle = color;
        context.fill();
        context.lineWidth = 2;
        context.strokeStyle = 'rgb(255, 255, 255)';
        context.stroke();
    }

    function getMousePos(event) {
        const rect = canvas.getBoundingClientRect();
        return {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        };
    }

    function rgbToBinary(color) {
        const [r, g, b] = color.match(/\d+/g);
        const binaryR = ('00000000' + parseInt(r, 10).toString(2)).slice(-8);
        const binaryG = ('00000000' + parseInt(g, 10).toString(2)).slice(-8);
        const binaryB = ('00000000' + parseInt(b, 10).toString(2)).slice(-8);

        return `${binaryR} ${binaryG} ${binaryB}`;
    }

    function applyCustomColor() {
        const binaryInput = customColorTextInput.value.replace(/\s/g, '');
        if (binaryInput.match(/^[01]{24}$/)) {
            const color = binaryToRGB(binaryInput);
            redSlider.value = parseInt(color[0]);
            greenSlider.value = parseInt(color[1]);
            blueSlider.value = parseInt(color[2]);
            updateColor();
        } else {
            alert('Invalid binary input. Please enter a valid 24-bit binary color code.');
        }
    }

    function binaryToRGB(binary) {
        const decimalValue = parseInt(binary, 2);
        const r = (decimalValue >> 16) & 255;
        const g = (decimalValue >> 8) & 255;
        const b = decimalValue & 255;

        return [r, g, b];
    }

    function resetCanvas() {
        customColorTextInput.value = ''; // Clear custom color input
        redSlider.value = 0;
        greenSlider.value = 0;
        blueSlider.value = 0;
        updateColor();
        draw(); // Redraw the grid
    }

    draw();
</script>