"use strict";

const str = document.querySelector("#typewriter").textContent;
document.querySelector("#typewriter").textContent = "";
console.log("str_" + str + "_");
console.log("third letter", str[2]);

let iterator = 0;
let maxNumberOfIterations;
let playing = true;

// Konstanter til lyde
const lyd1 = document.querySelector("#typekey1");
const lyd2 = document.querySelector("#typekey2");
// random lyd
let ranLyd = Math.floor(Math.random() * 2) + 1;

// Tilføjer click på start knappen og kører initLoop funktionen
document.querySelector("#start").addEventListener("click", initLoop);

function initLoop() {
  console.log("initLoop");
  //   sætter et max på indholdets længde af bpgstaver
  maxNumberOfIterations = str.length - 1;
  document.querySelector("#start").textContent = "Stop typing";
  document.querySelector("#start").addEventListener("click", stopTyping);
  loop();
}

function loop() {
  console.log("loop", str[iterator]);
  console.log("playing", playing);
  //   + gør at den ligger bogstaverne sammen og viser, hvis kun "=" så looper den hele tiden mellem bogstaverne / skifter dem ud
  document.querySelector("#typewriter").textContent += str[iterator];
  iterator++;
  lyd1.play();
  lyd2.play();
  //   fortæller hvis antallet af iterationer er mindre eller = vores maxietrationer skal den køre loop funktionen
  if (iterator <= maxNumberOfIterations && playing === true) {
    //   makes delay, tager fat i funktionen loop og forsinker med 200ms
    setTimeout(loop, 200);
  }
}

function stopTyping() {
  if (playing) {
    playing = false;
    document.querySelector("#start").textContent = "Start typing";
  } else {
    playing = true;
    document.querySelector("#start").textContent = "Stop typing";
    loop();
  }
}
