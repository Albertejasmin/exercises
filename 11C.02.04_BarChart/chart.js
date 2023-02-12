"use strict";

// CHAR GPT

// // Get the bar chart container and all the bars
// const container = document.getElementById("container");
// const bars = document.querySelectorAll(".bar");

// updateBars();
// // Set the height of each bar based on the customer count (between 0 and 32)
// function updateBars(count) {
//   for (let i = 0; i < bars.length; i++) {
//     let barHeight = (count / 32) * 100;
//     bars[i].style.height = `${barHeight}%`;
//   }
// }

// // Read a new measurement every second
// setInterval(function () {
//   let count = Math.floor(Math.random() * 33);
//   updateBars(count);
// }, 1000);

// EGET KODE
const model = [];
// generates random customer number

const bars = document.querySelector("#bars");

window.addEventListener("DOMContentLoaded", getRandomBars());

// INDSÆT FRA OPGAVEN BESKRIVELSE
// function getNumberOfCustomers() {
//   // FAKER: gives a completely random number
//   return Math.floor(Math.random() * 32);
// }
// const queueSize = getNumberOfCustomers();

getNumberOfCustomers();
// Faker data til køen: giver et komplet tilfældigt tal fra 0-32
function getNumberOfCustomers() {
  for (let i = 0; i < 40; i++) {
    model.push(Math.floor(Math.random() * 41));
    console.log("model", model);
  }
}

// MODIFY HIGHT OF SINGLE BAR

// CREATE BARS (40 DER ER 8 PT)
function getRandomBars() {
  // loop der kører fra 0-40 (i = iterations)
  for (let i = 0; i < 40; i += 1) {
    // tilføjer delay med setTimeout
    setTimeout(() => {
      let bar = document.createElement("div");
      bar.classList.add("bar");
      // sætter bars ind uden html
      bars.appendChild(bar);
      bar.style.height = model[i] + "px";
      const queueSize = getNumberOfCustomers();
    }, i * 1000);
  }
}
