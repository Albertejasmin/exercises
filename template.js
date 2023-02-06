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
