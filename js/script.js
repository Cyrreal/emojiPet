let allEmoji;
const elem = document.querySelector(".grid_main");
async function postData() {
  const response = await fetch("https://emoji-api-app.herokuapp.com/");
  allEmoji = await response.json();
  console.log(allEmoji);
}
postData().then(function () {
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
  console.log(sortEmoji);

  function loadDivsStart() {
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

  let searchInput = document.querySelector("#search");
  searchInput.addEventListener("input", (event) => search(event));
  const search = (event) => {
    let res = sortEmoji.filter((elem) => {
      return (
        elem.title.includes(event.target.value) ||
        elem.keywords.includes(event.target.value)
      );
    });

    // sortEmoji(element);
    elem.innerHTML = "";
    loadDivs(res);
  };
  function loadDivs(res = []) {
    insideElems = "";
    res.forEach(function (item) {
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
});
