"use strict";
// Loading script
document.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("loadedjs");
}

const value = Infinity;

if (value) {
  console.log("Value is true");
} else {
  console.log("Value is false");
}

function greeting(firstname) {
  return `Hello ${firstname}`;
}

const sayHi = greeting;

console.log(sayHi("Navn"));

// A function called with another function as a parameter
const person3 = {
  firstName: "Harry",
  lastName: "Potter",
  hired: false,
};
const person4 = {
  firstName: "Fred",
  lastName: "Weasley",
  hired: false,
};

function hire(person) {
  person.hired = true;
}

function fire(person) {
  person.hired = false;
}

function fireOrHire(action, person) {
  action(person);
}

fireOrHire(hire, person4);
console.log(person4);

fireOrHire(fire, person3);

// load JSON øvelse
loadJSON("http://my-url/data.json", prepareData);

function prepareData(data) {
  console.table(data);
}

async function loadJSON(url, callback) {
  const response = await fetch(url);
  const jsonData = await response.json();
  callback(jsonData);
}

// forEACH

const people = ["Harry", "Ron", "Hermione", "Albus"];

function sayHallo(person) {
  console.log(`${person} says hallo`);
}
people.forEach(sayHallo);

// ny, men people er den samme const
function testParams(a, b, c, d) {
  console.log(`a:${a}, b:${b}, c:${c}, d:${d},`);
}

people.forEach(testParams);
