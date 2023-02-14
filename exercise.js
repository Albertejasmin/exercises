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

// ANIMAL ØVELSER
// const Animal = {
//   name: "",
//   type: "unknown",
//   desc: "",
//   age: 0,
// };

// const animal = Object.create(Animal);

// Animal.image = "image.jpg";

// console.log(animal.image);

// FUNCTION EXERCISE
// function myName(firstName) {
//   console.log(`Hello ${firstName}`);
// }
// myName("Alberte");

// let firstName = "Alberte";
// let lastName = "Nielsen";
// The function is called with a variable called myName?
// firstName = parameter /
function myName(firstName, lastName) {
  console.log(`Hello ${firstName} ${lastName}`);
}
myName("Alberte", "Nielsen");

// The function is called without any parameter?

// Create another function called presentPet, that receives three parameters:
function presentPet(firstName, animalType, animalName) {
  console.log(`My name is ${firstName}, i have a ${animalType} called ${animalName}`);
}
presentPet("Alberte", "Klovnfisk", "Klaus");
