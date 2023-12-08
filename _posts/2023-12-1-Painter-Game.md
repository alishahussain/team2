---
layout: post
toc: false
description:
courses: { csp: {week: 14} }
permalink: binary-painter
type: ccc
---

  <title>Painter Game</title>
  <style>
    canvas {
        border: 1px solid black;
        display: block;
        margin: auto;
        /* background-color: rgb(0, 128, 145); /* background color */
    }
  </style>
  <h1>Painter Game!!</h1>
  <div></div>
  <p>Have fun with this awesome arcade game! To input your own binary code, the format is an 8 bit  value for the rgb value. for example. the value for red is 11111111 00000000 00000000</p>
  <h4 id="key">Key</h4>
  <ul>
  <li>red- 11111111 00000000 00000000</li>
  <li>green- 00000000 11111111 00000000</li>
  <li>blue- 00000000 00000000 11111111</li>
  </ul>
  <canvas id="gridCanvas" width="600" height="600"></canvas>
  <script>
    const canvas = document.getElementById('gridCanvas');
    const context = canvas.getContext('2d');
    /*color bar colors */
    const BLACK = 'rgb(0, 0, 0)';
    const WHITE = 'rgb(255, 255, 255)';
    const COLOR_BAR_HEIGHT = 30;
    const COLOR_BAR_COLORS = ['rgb(255, 0, 0)', 'rgb(0, 255, 0)', 'rgb(0, 0, 255)', 'rgb(255, 255, 255)', 'rgb(0, 0, 0)', 'rgb(0, 0, 0)'];
    /*grid sizes*/
    const GRID_WIDTH = 400;
    const GRID_HEIGHT = 400;
    const BLOCK_SIZE = 20;
    /*math so added colors are evenly split on the color bar*/
    let selectedColor = WHITE;
    let grid = createGrid(GRID_WIDTH / BLOCK_SIZE, GRID_HEIGHT / BLOCK_SIZE);
    /*drawing grid*/
    function createGrid(rows, cols) {
      return Array.from({ length: rows }, () => Array(cols).fill(0));
    }
    function drawGrid() {
      const startX = (canvas.width - GRID_WIDTH) / 2;
      const startY = (canvas.height - GRID_HEIGHT) / 2;
      for (let x = startX; x < startX + GRID_WIDTH; x += BLOCK_SIZE) {
        for (let y = startY; y < startY + GRID_HEIGHT; y += BLOCK_SIZE) {
          context.beginPath();
          context.rect(x, y, BLOCK_SIZE, BLOCK_SIZE);
          context.fillStyle = grid[(x - startX) / BLOCK_SIZE][(y - startY) / BLOCK_SIZE] === 0 ? BLACK : selectedColor;
          context.fill();
          context.lineWidth = 2;
          context.strokeStyle = WHITE;
          context.stroke();
        }
      }
    }
  /*drawing color bar*/
    function drawColorBar() {
      for (let i = 0; i < COLOR_BAR_COLORS.length; i++) {
        context.fillStyle = COLOR_BAR_COLORS[i];
        context.fillRect(i * (canvas.width / COLOR_BAR_COLORS.length), canvas.height - COLOR_BAR_HEIGHT, canvas.width / COLOR_BAR_COLORS.length, COLOR_BAR_HEIGHT);
      }
    }
  /*coloring in functions*/
    function getMousePos(event) {
      const rect = canvas.getBoundingClientRect();
      return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      };
    }
    function handleMouseDown(event) {
      const mousePos = getMousePos(event);
      if (mousePos.y >= canvas.height - COLOR_BAR_HEIGHT) {
        const colorIndex = Math.floor(mousePos.x / (canvas.width / COLOR_BAR_COLORS.length));
        selectedColor = COLOR_BAR_COLORS[colorIndex];
      } else {
        const gridX = Math.floor((mousePos.x - (canvas.width - GRID_WIDTH) / 2) / BLOCK_SIZE);
        const gridY = Math.floor((mousePos.y - (canvas.height - GRID_HEIGHT) / 2) / BLOCK_SIZE);
        grid[gridX][gridY] = selectedColor === BLACK ? 0 : selectedColor;
      }
      draw();
    }
    /*drawing */
    function draw() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      drawGrid();
      drawColorBar();
    }
    canvas.addEventListener('mousedown', handleMouseDown);
    draw();
    function binaryToRGB(binary) {
    /*Convert binary input to decimal*/
    const decimalValue = parseInt(binary, 2);
    const r = (decimalValue >> 16) & 255;
    const g = (decimalValue >> 8) & 255;
    const b = decimalValue & 255;

    return `rgb(${r}, ${g}, ${b})`;
  }

  function drawColorBar() {
    // Draw color boxes
    for (let i = 0; i < COLOR_BAR_COLORS.length; i++) {
      context.fillStyle = COLOR_BAR_COLORS[i];
      context.fillRect(i * (canvas.width / COLOR_BAR_COLORS.length), canvas.height - COLOR_BAR_HEIGHT, canvas.width / COLOR_BAR_COLORS.length, COLOR_BAR_HEIGHT);
    }

    // Draw custom binary input box
    context.fillStyle = 'lightgray';
    context.fillRect(canvas.width - 150, canvas.height - COLOR_BAR_HEIGHT, 150, COLOR_BAR_HEIGHT);

    // Draw text inside the custom binary input box
    context.fillStyle = 'black';
    context.font = '12px Arial';
    context.fillText('Custom Binary:', canvas.width - 145, canvas.height - 10);
  }

  function handleMouseDown(event) {
    const mousePos = getMousePos(event);

    // Check if the click is inside the custom binary input box
    if (
      mousePos.x >= canvas.width - 150 &&
      mousePos.y >= canvas.height - COLOR_BAR_HEIGHT
    ) {
      const binaryInput = prompt('Enter binary color:'); // You can use a more sophisticated input method
      if (binaryInput) {
        selectedColor = binaryToRGB(binaryInput);
      }
    } else if (mousePos.y >= canvas.height - COLOR_BAR_HEIGHT) {
      // Handle clicks on the color bar
      const colorIndex = Math.floor(
        mousePos.x / (canvas.width / COLOR_BAR_COLORS.length)
      );
      selectedColor = COLOR_BAR_COLORS[colorIndex];
    } else {
      // Handle clicks on the grid
      const gridX = Math.floor(
        (mousePos.x - (canvas.width - GRID_WIDTH) / 2) / BLOCK_SIZE
      );
      const gridY = Math.floor(
        (mousePos.y - (canvas.height - GRID_HEIGHT) / 2) / BLOCK_SIZE
      );
      grid[gridX][gridY] = selectedColor === BLACK ? 0 : selectedColor;
    }
    draw();
  }
  </script>