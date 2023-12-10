---
layout: post
toc: false
description:
courses: { csp: {week: 14} }
permalink: hex-to-bin-and-dec
type: ccc
---
<html>
<link href="hex.css" rel="stylesheet">
<body>
  <h2 class="title">Binary, Decimal and Hex Converter</h2>
  <div class="container">
    <div class="section">
      <div class="heading">
        <h4>binary</h4>
        <span class="output" id="bOutput"></span>
      </div>
      <input type="text" name="binary" id="binary">
      <div class="btns">
        <button class="btn" id="bToD">To Decimal</button>
        <button class="btn" id="bToH">To Hex</button>
      </div>
    </div>
    <div class="section">
      <div class="heading">
        <h4>decimal</h4>
        <span class="output" id="dOutput"></span>
      </div>
      <input type="text" name="decimal" id="decimal">
      <div class="btns">
        <button class="btn" id="dToB">To Binary</button>
        <button class="btn" id="dToH">To Hex</button>
      </div>
    </div>
    <div class="section">
      <div class="heading">
        <h4>hexadecimal</h4>
        <span class="output" id="hOutput"></span>
      </div>
      <input type="text" name="hexadecimal" id="hexadecimal">
      <div class="btns">
        <button class="btn" id="hToB">To Binary</button>
        <button class="btn" id="hToD">To Decimal</button>
      </div>
    </div>
  </div>
  <script type="text/javascript" src="scripts.js"></script>
</body>
</html>