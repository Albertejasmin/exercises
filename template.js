"use strict";
const person = "Peter";
const animal = "cat";
const catName = "Mandu";

console.log(`My name is ${person}.\nI have a ${animal} called ${catName}.`);

const name = "Albus Percival Wulfric Brian Dumbledore";
const len = name.length;
const letter = name[6];

console.log(`${name} is ${len} characters long.`);
console.log(`the first letter of ${name} is ${letter}.`);

const str1 = "   There is     space here \n  ";
const str2 = str1.trim();

console.log(str2);

const fullName = "Alberte Jasmin Nielsen";
const firstName = fullName.substring(0, 7);

console.log(`fistname is: _${firstName}_`);

// finder sidste bogstav i det første navn
const fullName2 = "Alberte Jasmin Nielsen";
// const nameEnd = fullName2.substring(6, 7);
const nameEnd = fullName2[6];

console.log(`fist letter is: _${nameEnd}_`);

const fullName3 = "Alberte Jasmin Nielsen";
// const nameEnd = fullName2.substring(6, 7);
const length3 = fullName3.length;
const last10 = fullName3.substring(length3 - 10);

console.log(last10);

//Convert a german word like “Goethestraße” correctly to “GOETHESTRASSE”

const text = "   Goethestraße";
const upper = text.toUpperCase();

console.log(upper);

// INIT LOOP PATTERN ØVELSE

let iterator = 0;
let maxNumberOfIterations;
initLoop();

function initLoop() {
  console.log("initLoop");
  //   sætter et max på 11 iterationer
  maxNumberOfIterations = 11;
  loop();
}

function loop() {
  console.log("loop", iterator);
  iterator++;
  //   fortæller hvis antallet af iterationer er mindre eller = vores maxietrationer skal den køre loop funktionen
  if (iterator <= maxNumberOfIterations) {
    //   makes delay, tager fat i funktionen loop og forsinker med 200ms
    setTimeout(loop, 200);
  }
}
