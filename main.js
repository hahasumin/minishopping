//Fetch the items from JSON file
function loadItems() {
  return fetch(
    "https://67259740-d8d4-48f5-bfdb-f6194347ddfd.mock.pstmn.io/items"
  )
    .then((response) => response.json())
    .then((json) => json.items);
}

// Update the list with the given items
function displayItems(items) {
  const container = document.querySelector(".items");
  container.innerHTML = items.map((item) => createHTMLString(item)).join("");
}

// create HTML list item from the given data item
function createHTMLString(item) {
  return `
  <li class="item">
      <img src="${item.image}" alt="${item.type}" class="item__thumbnail" />
      <span class="item__description">${item.gender}, ${item.size}</span>
  </li>
  `;
}

function onButtonClick(event, items) {
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;

  if (key == null || value == null) {
    return;
  }

  // const filtered = items.filter((item) => item[key] === value);
  // console.log(filtered);

  displayItems(items.filter((item) => item[key] == value));

  // console.log(event.target.dataset.key);
  // console.log(event.target.dataset.value);
}

function setEventListeners(items) {
  const logo = document.querySelector(".logo");
  const buttons = document.querySelector(".buttons");
  logo.addEventListener("click", () => displayItems(items));
  buttons.addEventListener("click", (event) => onButtonClick(event, items));
}

// main
loadItems()
  .then((items) => {
    displayItems(items);
    setEventListeners(items);
  })
  .catch(console.log);
