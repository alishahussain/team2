---
layout: post
toc: false
description:
courses: { csp: {week: 14} }
permalink: binary-painter
type: ccc
---

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Painter Game</title>
  <style>
    canvas {
        border: 1px solid black;
        display: block;
        margin: auto;
        background-color: rgb(0, 128, 145); /* background color */
    }
  </style>
</head>
<body>
  <canvas id="gridCanvas" width="600" height="600"></canvas>
  <script>
    const canvas = document.getElementById('gridCanvas');
    const context = canvas.getContext('2d');

    const BLACK = 'rgb(0, 0, 0)';
    const WHITE = 'rgb(255, 255, 255)';
    const COLOR_BAR_HEIGHT = 30;
    const COLOR_BAR_COLORS = ['rgb(255, 0, 0)', 'rgb(0, 255, 0)', 'rgb(0, 0, 255)', 'rgb(255, 255, 255)', 'rgb(0, 0, 0)',];

    const GRID_WIDTH = 400;
    const GRID_HEIGHT = 400;
    const BLOCK_SIZE = 20;

    let selectedColor = WHITE;
    let grid = createGrid(GRID_WIDTH / BLOCK_SIZE, GRID_HEIGHT / BLOCK_SIZE);

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

    function drawColorBar() {
      for (let i = 0; i < COLOR_BAR_COLORS.length; i++) {
        context.fillStyle = COLOR_BAR_COLORS[i];
        context.fillRect(i * (canvas.width / COLOR_BAR_COLORS.length), canvas.height - COLOR_BAR_HEIGHT, canvas.width / COLOR_BAR_COLORS.length, COLOR_BAR_HEIGHT);
      }
    }

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

    function draw() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      drawGrid();
      drawColorBar();
    }

    canvas.addEventListener('mousedown', handleMouseDown);

    draw();
  </script>
</body>
</html>