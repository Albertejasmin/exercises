"use strict";

function greeting(firstName) {
  return `Hello ${firstName}`;
}
const result = greeting("Peter");
console.log("result", result);

console.log("result directly", greeting("Direct Tim"));

// function greeting("any name") {
//   console.log(greeting("any name"));

//   const txt = `Greeting is ${greeting("a name")}`;
//   console.log(result);
// }
