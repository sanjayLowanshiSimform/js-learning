let list = [
  { text: "bread", cost: 20, need: true },
  { text: "butter", cost: 45, need: true },
  { text: "jam", cost: 60, need: false },
  { text: "ketchup", cost: 40, need: true },
  { text: "cheese", cost: 45, need: false },
];

let html = '';
let total = 0;

//forEach loop
list.forEach((item) => {
  if (item.need) {
    html += `<li>${item.text}</li>`;
    total += item.cost;
  }
})
/*
// destructuring above loop
list.forEach(({text, cost, need}) => {
  if (need) {
    html += `<li>${text}</li>`;
    total += cost;
  }
})
*/

// for-of Loop
for(item of list) {
  if (item.need) {
    html += `<li>${item.text}</li>`;
    total += item.cost;
  }
}
/*
// destructuring above loop
for(let {text, cost, need} of list) {
  if (need) {
    html += `<li>${text}</li>`;
    total += cost;
  }
}
*/

// Display the shopping list and total cost on the webpage
document.getElementById("list").innerHTML = html;
document.getElementById("cost").innerHTML = `Total Cost: ₹${total}`;