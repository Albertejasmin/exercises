"use strict";

let cal = 0;

const names = ["Signe", "Per", "Mone", "Hanne", "Lotte", "Jeanette"];

console.log("Names", names);

names.sort(sortAlphabetically);

function sortAlphabetically(nameA, nameB) {
  //   console.log(`nameA: ${nameA} and nameB: ${nameB}`);
  if (nameA < nameB) {
    return -1;
  } else if (nameB < nameA) {
    return 1;
  } else {
    return 0;
  }
}

console.log("Sorted names", names);

// SORTER PÅ LÆNGDEN / LENGTH !!!

function sortAlphabetically(nameA, nameB) {
  //   console.log(`nameA: ${nameA} and nameB: ${nameB}`);
  if (nameA.length > nameB.length) {
    return -1;
  } else if (nameB.length > nameA.length) {
    return 1;
  } else {
    return 0;
  }
}

// OBJECT SORTING

const objectNames = [{ name: "Signe" }, { name: "Per" }, { name: "Mone" }];

console.log("Names", objectNames);

function sortObjects(elementA, elementB) {
  //   console.log(`nameA: ${nameA} and nameB: ${nameB}`);
  if (elementA.name > nameB.name) {
    return -1;
  } else if (elementA.name > elementB.name) {
    return 1;
  } else {
    return 0;
  }
}
console.log("Names sorted", objectNames);

// SORT MED DYR

const animals = [
  { name: "Signe", type: "cat" },
  { name: "Per", type: "dog" },
  { name: "Mone", type: "cat" },
  { name: "Lis", type: "tiger" },
];

console.log("animals", animals);

// SORTS BY CAT
const cats = animals.filter(findCats);

function findCats(animal) {
  cal++;
  return animal.type === "cat";
}
console.log("filtred cats", cats);

// SORTING BY NAME
animals.sort(compareByName);

function compareByName(animaleA, animaleB) {
  cal++;
  if (animaleA.name < animaleB.name) {
    return -1;
  } else if (animaleA.name < animaleB.name) {
    return 1;
  } else {
    return 0;
  }
}
console.log("sorted animals", animals);

// cal++, bruges bare til at regne hvor mange beregninger der er, derfor sættes de ind i funtionerne, hvor de hvergang ligges til.
console.log("Calculations", cal);
