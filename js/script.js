let getJsonFile = (pathToFile) => {
  let request = new XMLHttpRequest();

  request.open("GET", pathToFile, false);
  request.send(null);

  let my_JSON_object = JSON.parse(request.responseText);

  return my_JSON_object;
};
const allEmoji = getJsonFile("https://emoji-api-app.herokuapp.com/");

let sortEmoji = allEmoji.map((element) => {
  for (key in element) {
    if (key == "keywords") {
      // console.log(element[key]);
      let res = element[key].split(" ");
      res = [...new Set(res)].join(" ");
      element[key] = res;
    }
  }
  return element;
});

function loadDivsStart() {
  let elem = document.querySelector(".grid_main");
  let insideElems = "";
  sortEmoji.forEach(function (item) {
    insideElems += `
          <div class="grid-item">
              <div>${item.symbol}</div>
              <h2>${item.title}</h2>
              <p>${item.keywords}</p>
          </div>
          `;
  });
  elem.innerHTML = insideElems;
}
loadDivsStart();

let searchInput = document.querySelector("#search");
searchInput.addEventListener("input", (event) => search(event));

const search = (event) => {
  let res = sort.filter((elem) => {
    return (
      elem.title.includes(event.target.value) ||
      elem.keywords.includes(event.target.value)
    );
  });

  loadDivs(res);
};

function loadDivs(res = []) {
  let elem = document.querySelector(".grid_main");
  let insideElems = "";

  if (res.length == 0) {
    sortEmoji.forEach(function (item) {
      insideElems += `
          <div class="grid-item">
              <div>${item.symbol}</div>
              <h2>${item.title}</h2>
              <p>${item.keywords}</p>
          </div>
          `;
    });
  } else {
    res.forEach(function (item) {
      insideElems += `
          <div class="grid-item">
              <div>${item.symbol}</div>
              <h2>${item.title}</h2>
              <p>${item.keywords}</p>
          </div>
          `;
    });
  }
  elem.innerHTML = insideElems;
}
loadDivs();
