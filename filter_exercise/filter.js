"use strict";

const animals = [
  {
    name: "Mandu",
    type: "cat",
  },
  {
    name: "Henry",
    type: "cat",
  },
  {
    name: "Pelle",
    type: "dog",
  },
  {
    name: "Mulle",
    type: "dog",
  },
];

function isCat(animal) {
  if (animal.type === "cat") {
    return true;
  } else {
    return false;
  }
}

function all() {
  return true;
}
function none() {
  return false;
}
// console.log("ALL", animals.filter(all));
// console.log("NONE", animals.filter(none));
// console.log(isCat(animals[2]));
console.log("ONLY CATS", animals.filter(isCat));

// FILTER ØVELSE / EKSEMPEL
const names = ["Signe", "Per", "Mone", "Hanne", "Lotte"];

console.log("Names", names);

names.forEach(printNames);

// functionen har 3 parametre/arguments
// 1 parameter er ALTID elementet (navnet her)
// 2 parameter er elementes index/placering
function printNames(name, index, arr) {
  if (index === 0) {
    console.log("Array: ", arr);
  }
  console.log(`${name} has index number ${index}`);
}

let shortNames = names.filter(removeLongNames);

// (name) is just an element
function removeLongNames(name) {
  if (name.length > 5) {
    return false;
  }
  return true;
}
console.log("Short names", shortNames);

// KAN SKRIVES ENDNU KORTERE !!! :

function removeLongNames(name) {
  return name.length > 5;
}
