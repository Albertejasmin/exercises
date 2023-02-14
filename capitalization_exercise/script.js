"use strict";

function capitalize(str) {
  let result = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  return result;
}

console.log(capitalize("albeRTE"));

const name = "pETer";
const cap = capitalize(name);
console.log(cap);
