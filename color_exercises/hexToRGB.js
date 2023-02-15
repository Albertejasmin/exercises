"use strict";

// hexToRGB("#c0ffee");

function hexToRGB(hexColor) {
  const r = parseInt(hexColor.substring(1, 3), 16);
  const g = parseInt(hexColor.substring(3, 5), 16);
  const b = parseInt(hexColor.substring(5, 7), 16);

  const result = {
    r: r,
    g: g,
    b: b,
  };

  return result;

  // ovenstående kan srkives kortere som return {r,g,b}
  // return { r, g, b };
}

console.log("Color as RGB", hexToRGB("#f80ea3"));
console.log("Red componemt", hexToRGB("#f80ea3").r);
