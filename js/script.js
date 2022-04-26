let getJsonFile = (pathToFile) => {
  let request = new XMLHttpRequest();

  request.open("GET", pathToFile, false);
  request.send(null);

  let my_JSON_object = JSON.parse(request.responseText);

  return my_JSON_object;
};
const allEmoji = getJsonFile("https://emoji-api-app.herokuapp.com/");
//

function antiDuplicate(arg1) {
  arg1 = arg1.split(" ");
  let allEmojiUnique = [];
  for (let i = 0; i < arg1.length; i++) {
    if (allEmojiUnique.indexOf(arg1[i]) == -1) {
      allEmojiUnique.push(arg1[i]);
    }
  }
  return (allEmojiUnique = allEmojiUnique.join(" "));
}

function loadDivs() {
  let elem = document.querySelector(".grid_main");
  let insideElems = "";
  allEmoji.forEach(function (item) {
    insideElems += `
          <div class="grid-item">
              <div>${item.symbol}</div>
              <h2>${item.title}</h2>
              <p>${antiDuplicate(item.keywords)}</p>
          </div>
          `;
  });
  elem.innerHTML = insideElems;
}
loadDivs();
let searchItems = document.querySelectorAll(".grid-item");
document.querySelector("#search").oninput = function () {
  let val = this.value.trim();
  //   val = val.toLowerCase();
  if (val.length > 2) {
    searchItems.forEach(function (elem) {
      if (elem.innerText.search(val) == -1) {
        elem.classList.add("grid-item-search");
      } else {
        elem.classList.remove("grid-item-search");
      }
    });
  }
};
