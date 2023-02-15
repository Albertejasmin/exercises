"use strict";

function optionalParameters(param1, param2, param3) {
  if (param3 === undefined) {
    return `${param2.toLowerCase()} ${param1}`;
  }
  return `${param2} ${param1} ${param3}`;
}

let variable = optionalParameters("Weird", "Some", "String");
console.log("variable:", variable);
