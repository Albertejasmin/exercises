"use strict";

// KONSTANTER
// sætter iterator til -1, så den starter på 0

let iterator = -1;
const arr = [];

// Kalder functionen
counting();

function counting() {
  //   console.log("counting");
  iterator++;
  // unshift tilføjer et element til vores array/iterator
  arr.unshift(iterator);
  //   hvis arrayets længde er over 9, skal den med .pop fjerne det sidste element
  if (arr.length > 9) {
    // .pop removes the last element from an array
    arr.pop();
  }
  //   Sætter DELAY på vores function, med 1000 = millisekunder
  setTimeout(counting, 1000);
  console.log(arr);
}
