"use strict";

// JSON DATA - https://petlatkea.dk/2021/hogwarts/students.json

window.addEventListener("DOMContentLoaded", start);

// Global array
const allStudents = [];

// variabler
let studentInfo = document.querySelector("#student");

// Laver prototypen til Student objects
const Student = {
  firstName: "",
  lastName: "",
  middleName: "",
  nickName: "",
  image: "",
  house: "",
};

function start() {
  console.log("ready");

  loadJSON();
}

function loadJSON() {
  console.log("fetcher jsondata");
  fetch("hogwarts.json")
    .then((response) => response.json())
    .then((jsonData) => {
      // when loaded, prepare objects
      prepareObjects(jsonData);
    });
}

function prepareObjects(jsonData) {
  jsonData.forEach((jsonObject) => {
    // TODO: Create new object with cleaned data - and store that in the allAnimals array
    const student = Object.create(Student);

    const text = jsonObject.fullname.split(" ");
    // console.log("variabler oprettet");

    // FIRSTNAME
    // sætter forbogstav til STORT og resten til småt
    student.firstName = text[0].charAt(0).toUpperCase() + text[0].slice(1).toLowerCase();

    //    MIDDLENAME

    // If there are more than 2 text in the full name, the middle name(s) are present
    if (text[0] === " ") {
      text = text[1] + text.slice(1);
      console.log(text);
    } else if (text.length > 2) {
      console.log(text[1].charAt(0).toUpperCase() + text[1].slice(1).toLowerCase());
      // Capitalize and clean the first middle name
      student.middleName = text[1].charAt(0).toUpperCase() + text[1].slice(1).toLowerCase();
    } else if (text.length === 2) {
      // If there are only 2 text elements, the second element is the last name
      student.lastName = text[1].charAt(0).toUpperCase() + text[1].slice(1).toLowerCase();
    }

    // LASTNAME
    // Capitalize and clean the last name
    student.lastName = text[text.length - 1].charAt(0).toUpperCase() + text[text.length - 1].slice(1).toLowerCase();

    // student.nickName = text[2];
    // student.photo = text[2];

    // HOUSE
    student.house = jsonObject.house.trim().charAt(0).toUpperCase() + jsonObject.house.slice(1).toLowerCase();

    // let housename = jsonObject.house;
    // housename = house.trimStart();
    // housename = house.trimEnd();
    // student.housename.charAt(0).toUpperCase() + housename.slice(1).toLowerCase();
    // console.log(housename);

    // Tilføjer det nye object til vores array allStudents
    allStudents.push(student);
  });
  displayList();
}

function displayList() {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  allStudents.forEach(displayStudent);
}

function displayStudent(student) {
  // create clone
  const clone = document.querySelector("template#student").content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=firstname]").textContent = student.firstName;
  clone.querySelector("[data-field=middlename]").textContent = student.middleName;
  clone.querySelector("[data-field=lastname]").textContent = student.lastName;
  clone.querySelector("[data-field=nickname]").textContent = student.nickName;
  clone.querySelector("[data-field=photo]").textContent = student.photo;
  clone.querySelector("[data-field=house]").textContent = student.house;

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}
