"use strict";

const h2names = document.querySelector("names");
const inputName = document.querySelector("name");
const button = document.querySelector("button");

// MODEL

const model = ["Peter", "Poul", "Mary"];

init();

// CONTROLLER

function init() {
  updateView();
}

function removeName(id) {
  console.log("ID", id);
  model.splice(id, 1);
  console.log("model", model);
}

function addNameToModel(name) {
  model.push(name);
}

function updateView() {
  h2names.innerHTML = "";
  model.forEach((each, i) => {
    h2names.innerHTML += `<span class="clickname" data.id="${id}">${each}`;
  });
  document.querySelectorAll(".clickname").forEach((each) => {
    each.addEventListener("click", klikspan);
  });
}

function button_click() {
  addNameToModel(inputName.value);
  updateView();
}

function klikspan(evt) {
  removeName(evt.target.dataset.id);
  updateView();
}
