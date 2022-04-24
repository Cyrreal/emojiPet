let main = document.getElementsByTagName("main")[0];
console.dir(main);

let main_div = document.createElement("div");
main_div.className = "grid_main";
// let grid_h2 = document.createElement("h2");
// let grid_div_inside = document.createElement("div");
// let grid_p = document.createElement("p");

let createDiv = (arg1, arg2, arg3) => {
  let grid_div = document.createElement("div");
  grid_div.insertAdjacentHTML("afterbegin", `<div>${arg3}<div>`);
  grid_div.insertAdjacentHTML("afterbegin", `<h2>${arg2}<h2>`);
  grid_div.insertAdjacentHTML("afterbegin", `<p>${arg1}<p>`);
  main_div.append(grid_div);
  main.append(main_div);
  grid_div.className = "grid-item";
};

createDiv(
  "Eggplant or баклажан, one of the most popular emoji",
  "Eggplant",
  "&#127814"
);
createDiv(
  "Eggplant or баклажан, one of the most popular emoji",
  "Eggplant",
  "&#127814"
);
createDiv(
  "Eggplant or баклажан, one of the most popular emoji",
  "Eggplant",
  "&#127814"
);
createDiv(
  "Eggplant or баклажан, one of the most popular emoji",
  "Eggplant",
  "&#127814"
);
createDiv(
  "Eggplant or баклажан, one of the most popular emoji",
  "Eggplant",
  "&#127814"
);
createDiv(
  "Eggplant or баклажан, one of the most popular emoji",
  "Eggplant",
  "&#127814"
);

// grid_div.className = "flex";
