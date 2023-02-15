"use strict";

window.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("START");
  randomBackground();
}

// sets background to a random color
function randomBackground() {
  randomColor();
  rgbToCSS();
}

// returns a random rgb color object
function randomColor() {
  console.log("random color");
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const result = { r, g, b };

  return result;
}

// converts a rgb color object into a CSS color string
function rgbToCSS(rgb) {
  const { r, g, b } = rgb;
  return `rgb(${r}, ${g}, ${b})`;
}

// console.log("This is a random color:", rgb);
const rgbColor = randomColor();
console.log("Generated color:", rgbColor);

const cssColor = rgbToCSS(rgbColor);
console.log("CSS color string:", cssColor);

const backgroundResult = (document.body.style.backgroundColor = cssColor);
console.log("backgroundColor=", backgroundResult);
