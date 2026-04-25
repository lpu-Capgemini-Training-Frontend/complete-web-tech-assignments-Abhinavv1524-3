let api1 = "https://api.escuelajs.co/api/v1/products";

let table = document.getElementById("data-table");
let searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", () => {
  let value = searchInput.value.toLowerCase();
  let rows = table.getElementsByTagName("tr");

  for (let i = 1; i < rows.length; i++) {
    let cells = rows[i].getElementsByTagName("td");
    let found = false;
    for (let j = 0; j < cells.length; j++) {
      if (cells[j].textContent.toLowerCase().includes(value)) {
        found = true;
        break;
      }
    }
    rows[i].style.display = found ? "" : "none";
  }
});

table.style.width = "100%";

console.log(table);
async function fetchData() {
  let response = await fetch(api1);
  let data = await response.json();
  console.log(data);
  data.forEach((item) => {
    let row = table.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);

    cell1.textContent = item.id;
    cell2.textContent = item.title;
    cell3.textContent = item.slug;
    cell4.textContent = item.price;
    cell5.textContent = item.description;
  });
}

fetchData();
