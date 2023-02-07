"use strict";

let textInput = document.querySelector("#input");
let textOutput = document.querySelector("#output");
let dropDown = document.querySelector("#dropDown");

const submit = document.querySelector("#submit");

// submit.addEventListener("click", () => {
//   if (dropDown === 1) {
//     console.log(input.charAt(0).toUpperCase() + input.slice(1));
//   }
// });

submit.addEventListener("click", outputResult);

function outputResult() {
  // 1
  if (dropDown.value === "1") {
    console.log(textInput.value.charAt(0).toUpperCase() + textInput.value.slice(1).toLowerCase());
    textOutput.value = textInput.value.charAt(0).toUpperCase() + textInput.value.slice(1).toLowerCase();
  }
  //   2
  else if (dropDown.value === "2") {
    console.log(textInput.value.split(" ")[0]);
    textOutput.value = textInput.value.split(" ")[0];
  }
  //   3
  else if (dropDown.value === "3") {
    console.log(textInput.value.split(" ")[0].length);
    textOutput.value = textInput.value.split(" ")[0].length;
  }
  //   4
  else if (dropDown.value === "4") {
    console.log(textInput.value.substring(textInput.value.indexOf(" "), textInput.value.lastIndexOf(" ")).trim());
    textOutput.value = textInput.value.substring(textInput.value.indexOf(" "), textInput.value.lastIndexOf(" ")).trim();
  }
  //   5
  else if (dropDown.value === "5") {
    if (textInput.value.endsWith(`.jpg`)) {
      textOutput.value = "This is a .jpg";
    } else if (textInput.value.endsWith(`.png`)) {
      textOutput.value = "This is a .png";
    } else {
      textOutput.value = "This is not a .jpg or a .png";
    }
  }
}

// Const str = “Harry James Potter”
// Console.log(str.substring(str.indexOf(“ “), str.lastIndexOf(“ ”));
