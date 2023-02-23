"use strict";

window.addEventListener("DOMContentLoaded", start);
const inputColor = document.querySelector("input");

function start(evt) {
  console.log(evt);
  addEventListeners();
}

function addEventListeners() {
  document.querySelector("#my_color_picker").addEventListener("input", showColor);
  // return inputColor.addEventListener("input", showColor);
}

function showColor(evt) {
  showSelectedColor(evt.target.value);
}

function showSelectedColor(hexValue) {
  // console.log(hexColor);
  document.querySelector("#color_on_display").style.backgroundColor = hexValue;
  // console.log(hexToRGB(hexColor));

  const HEXColor = hexValue;
  const RGBColor = hexToRGB(HEXColor);
  const HSLColor = RGBtoHSL(RGBColor.r, RGBColor.g, RGBColor.b);
  // console.log("RGBColor", RGBColor);

  // kalder vis/show functionerne
  showHEX(HEXColor);
  showRGB(RGBColor);
  showHSL(HSLColor);
  // console.log("HSL", RGBtoHSL(RGBColor.r, RGBColor.g, RGBColor.b));
}

// VIEW

function showHEX(color) {
  document.querySelector("#hex").textContent = `HEX: ${color}`;
}
function showRGB(color) {
  document.querySelector("#rgb").textContent = `RBG: ${color.r} ${color.g} ${color.b}`;
}
function showHSL(color) {
  document.querySelector("#hsl").textContent = `HSL: h:${Math.round(color.h)}° s:${Math.round(color.s)}% l:${Math.round(color.l)}%`;
}

// CONVERTER FUNTIONS --> CONTROLLER (MVC model)

// HEX TIL RGB
function hexToRGB(hexColor) {
  const r = parseInt(hexColor.substring(1, 3), 16);
  const g = parseInt(hexColor.substring(3, 5), 16);
  const b = parseInt(hexColor.substring(5, 7), 16);

  const result = {
    r: r,
    g: g,
    b: b,
  };
  return result;
}

// MODEL
// RGB TO HSL
function RGBtoHSL(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);
  let h, s, l;

  if (max === min) {
    h = 0;
  } else if (max === r) {
    h = 60 * (0 + (g - b) / (max - min));
  } else if (max === g) {
    h = 60 * (2 + (b - r) / (max - min));
  } else if (max === b) {
    h = 60 * (4 + (r - g) / (max - min));
  }

  if (h < 0) {
    h = h + 360;
  }

  l = (min + max) / 2;

  if (max === 0 || min === 1) {
    s = 0;
  } else {
    s = (max - l) / Math.min(l, 1 - l);
  }
  // multiply s and l by 100 to get the value in percent, rather than [0,1]
  s *= 100;
  l *= 100;

  r *= 255;
  g *= 255;
  b *= 255;

  return { h, s, l };
}
