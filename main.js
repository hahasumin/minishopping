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
  const html = items.map((item) => createHTMLString(item)).join("");
  console.log(html);
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
// main
loadItems()
  .then((items) => {
    displayItems(items);
    // setEventListeners(items);
  })
  .catch(console.log);
