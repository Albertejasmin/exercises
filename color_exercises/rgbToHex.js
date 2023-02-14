"use script";

rgbTOhex("186 218 85");

function rgbTOhex(hexCol) {
  console.log(hexCol);
  const hexStr = hexCol.split(" ");
  console.log("hexStr", hexStr);
  let r = parseInt(hexStr[0]);
  let g = parseInt(hexStr[1]);
  let b = parseInt(hexStr[2]);

  console.log("r", typeof r);

  // let hexString = "";

  let hexString = r.toString(16);
}
