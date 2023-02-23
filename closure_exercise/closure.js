"use strict";

const allAnimals = [
  { name: "Signe", type: "cat" },
  { name: "Per", type: "dog" },
  { name: "Mone", type: "cat" },
  { name: "Lis", type: "tiger" },
  { name: "Sune", type: "cat" },
  { name: "Molle", type: "dog" },
  { name: "Klaus", type: "cat" },
  { name: "John", type: "tiger" },
];

console.log("all animals", allAnimals);

filterList1("cat");
filterList1("dog");

function filterList1(type) {
  let list;
  if (type === "cat") {
    list = allAnimals.filter(isCat);
  } else if (type === "dog") {
    list = allAnimals.filter(isDog);
  }

  console.log("list", list);
}

function isCat(animal) {
  return animal.type === "cat";
}
function isDog(animal) {
  return animal.type === "dog";
}

// CLOSURE BRUGT med type, sådan undgår vi alle de mange steps fra øverste løsning.
filterList2("cat");
filterList2("tiger");

function filterList2(type) {
  const list = allAnimals.filter(isAnimalType);

  function isAnimalType(animal) {
    return animal.type === type;
  }

  console.log("list 2:", list);
}
