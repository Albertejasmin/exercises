"use strict";

// OBEJCTS ØVELSER

// const student1 = {
//   firstName: "Harry",
//   lastName: "Potter",
// };
// const student2 = {
//   firstName: "Harry",
//   lastName: "Potter",
// };

// student1.firstName = student2.firstName;
// student1.lastName = student2.lastName;

// if (student1 === student2) {
//   console.log("They are the same!");
// } else {
//   console.log("They are not ...");
// }

const Animal = {
  name: "",
  type: "unknown",
  desc: "",
  age: 0,
};

const animal = Object.create(Animal);

Animal.image = "image.jpg";

console.log(animal.image);
