"use strict";

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [];

// The prototype for all animals:
const Animal = {
  name: "",
  desc: "-unknown animal-",
  type: "",
  age: 0,
};

function start() {
  console.log("ready");

  // TODO: Add event-listeners to filter and sort buttons
  addEventListeners();
  loadJSON();
}

function addEventListeners() {
  // sætter click event på filter knapper, så den kan filtrer mellem dyrne
  document.querySelectorAll("[data-action='filter']").forEach((button) => button.addEventListener("click", selectFilter));
  //  sætter click event på filter knapper, så den kan SORTERER
  document.querySelectorAll("[data-action='sort']").forEach((button) => button.addEventListener("click", selectSort));
}

async function loadJSON() {
  const response = await fetch("animals.json");
  const jsonData = await response.json();

  // when loaded, prepare data objects
  prepareObjects(jsonData);
}

function prepareObjects(jsonData) {
  allAnimals = jsonData.map(preapareObject);

  // TODO: This might not be the function we want to call first
  displayList(allAnimals);
}

function preapareObject(jsonObject) {
  const animal = Object.create(Animal);

  const texts = jsonObject.fullname.split(" ");
  animal.name = texts[0];
  animal.desc = texts[2];
  animal.type = texts[3];
  animal.age = jsonObject.age;

  return animal;
}

function selectFilter(event) {
  const filter = event.target.dataset.filter;
  console.log(`User selected ${filter}`);
  //   Kalder filterList(med det selectede filter)
  filterList(filter);
}

function filterList(animalType) {
  let filteredList = allAnimals;
  if (animalType === "cat") {
    // Create a filtered list of only cats
    filteredList = allAnimals.filter(isCat);
  } else if (animalType === "dog") {
    // Create a filtered list of only dogs
    filteredList = allAnimals.filter(isDog);
  }

  displayList(filteredList);
}

function isCat(animal) {
  return animal.type === "cat";
}

function isDog(animal) {
  return animal.type === "dog";
}

// SORTING

function selectSort(event) {
  const sortBy = event.target.dataset.sort;
  console.log(`User selected ${sortBy}`);
  //   Kalder sortList(med det valgte sorting
  sortList(sortBy);
}

function sortList(sortBy) {
  let sortedList = allAnimals;

  if (sortBy === "name") {
    // Hvis sortedList = er "sorted" by name / .sort (en array methods)
    sortedList = sortedList.sort(sortByName);
  } else if (sortBy === "type") {
    sortedList = sortedList.sort(sortByType);
  } else if (sortBy === "desc") {
    sortedList = sortedList.sort(sortByDesc);
  } else if (sortBy === "age") {
    sortedList = sortedList.sort(sortByAge);
  }
  // husk at display listen
  displayList(sortedList);
}

// SORTING BY  NAME
function sortByName(animalA, animalB) {
  // siger hvis animalA kommer før < animalB
  if (animalA.name < animalB.name) {
    return -1;
  } else {
    return 1;
  }
}

// SORTING BY  TYPE
function sortByType(animalA, animalB) {
  // siger hvis animalA kommer før < animalB
  if (animalA.type < animalB.type) {
    return -1;
  } else {
    return 1;
  }
}

// SORTING BY  DESC
function sortByDesc(animalA, animalB) {
  // siger hvis animalA kommer før < animalB
  if (animalA.desc < animalB.desc) {
    return -1;
  } else {
    return 1;
  }
}
// SORTING BY AGE
function sortByAge(animalA, animalB) {
  // siger hvis animalA kommer før < animalB
  if (animalA.age < animalB.age) {
    return -1;
  } else {
    return 1;
  }
}

function displayList(animals) {
  // clear the list
  document.querySelector("#list tbody").innerHTML = "";

  // build a new list
  animals.forEach(displayAnimal);
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
