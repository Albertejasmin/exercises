"use strict";

window.addEventListener("DOMContentLoaded", start);

const allAnimals = [];

// Laver rn prototype /husk stort forbogstav)
const Animal = {
  name: "",
  type: "unknown",
  desc: "",
  age: 0,
};

function start() {
  console.log("ready");

  loadJSON();
}

function loadJSON() {
  fetch("animals.json")
    .then((response) => response.json())
    .then((jsonData) => {
      // when loaded, prepare objects
      prepareObjects(jsonData);
    });
}

function prepareObjects(jsonData) {
  jsonData.forEach((jsonObject) => {
    // TODO: Create new object with cleaned data - and store that in the allAnimals array

    // Klaus løsning
    const animal = Object.create(Animal);

    const text = jsonObject.fullname.split(" ");

    animal.age = jsonObject.age;
    animal.name = text[0];
    animal.type = text[3];
    animal.desc = text[2];

    // Tilføjer det nye object til vores array allAnimals
    allAnimals.push(animal);
  });
  displayList();
}
//     const animal = Object.create(Animal);
//     // starter på 0 og slytter på det første mellemrum
//     let name = jsonObject.fullname.substring(0, jsonObject.fullname.indexOf(" "));
//     // starter fra det sidste mellemrum, slutningen behøves ikke være defineret
//     let type = jsonObject.fullname.substring(jsonObject.fullname.lastIndexOf(" "));
//     // Finder midten af fullname
//     let desc = jsonObject.fullname.substring(jsonObject.fullname.indexOf(" ") + 5, jsonObject.fullname.lastIndexOf(" "));
//     console.log(desc);
//     let age = jsonObject.age;
//     console.log(age);
//     // Giver det nye object værdierne som defineret ovenfor !!
//     animal1.name = name;
//     animal1.type = type;
//     animal1.desc = desc;
//     animal1.age = age;
//     console.log(animal);
//     // Tilføjer det nye object til vores array allAnimals
//     allAnimals.push(animal);
//     console.log(allAnimals);
//   });

function displayList() {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  allAnimals.forEach(displayAnimal);
}

function displayAnimal(animal) {
  // create clone
  const clone = document.querySelector("template#animal").content.cloneNode(true);

  // set clone data
  clone.querySelector("[data-field=name]").textContent = animal.name;
  clone.querySelector("[data-field=desc]").textContent = animal.desc;
  clone.querySelector("[data-field=type]").textContent = animal.type;
  clone.querySelector("[data-field=age]").textContent = animal.age;

  // append clone to list
  document.querySelector("#list tbody").appendChild(clone);
}
