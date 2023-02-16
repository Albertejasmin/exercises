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
