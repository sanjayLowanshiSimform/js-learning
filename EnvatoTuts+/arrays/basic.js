// 1)

let list = ["bread", "butter", "jam", "ketchup", "cheese"];

let html = "";

for (let index = 0; index < list.length; index++) {
  // Build HTML string for each item
  html += `<li>${list[index]}</li>`;
}
/*
- for loop syntax:
for (init; condition; increment) {
  code here..
}
*/
console.log(typeof html);
console.log(html);
document.getElementById("list").innerHTML = html;

// 2) Array of objects representing a shopping list
let shoppingListForLoop = [
  { text: "bread", cost: 20, need: true },
  { text: "butter", cost: 45, need: true },
  { text: "jam", cost: 60, need: false },
  { text: "ketchup", cost: 40, need: true },
  { text: "cheese", cost: 45, need: false },
];

// Initialize variables for HTML and total cost
let htmlForLoop = "";
let totalCostForLoop = 0;

// Loop through each item in the shopping list
for (let index = 0; index < shoppingListForLoop.length; index++) {
  let itemForLoop = shoppingListForLoop[index];

  if (itemForLoop.need) {
    // Build HTML string for each itemForLoop
    htmlForLoop += `<li>${itemForLoop.text}</li>`;

    // Accumulate total cost
    console.log(htmlForLoop);
    console.log(itemForLoop);
    console.log(itemForLoop.cost);
    totalCostForLoop += itemForLoop.cost;
    console.log(totalCostForLoop);

  }
}

// Display the shopping list and total cost on the webpage
document.getElementById("listForLoop").innerHTML = htmlForLoop;
document.getElementById("costForLoop").innerHTML = `Total Cost: ₹${totalCostForLoop}`;

// 3) Array of objects representing a shopping list using while
let shoppingListWhileLoop = [
  { text: "bread", cost: 20, need: true },
  { text: "butter", cost: 45, need: true },
  { text: "jam", cost: 60, need: false },
  { text: "ketchup", cost: 40, need: true },
  { text: "cheese", cost: 45, need: false },
];


let index = 0;
let itemWhileLoop;
let htmlWhileLoop = '';
let totalCostWhileLoop = 0;

while (itemWhileLoop = shoppingListWhileLoop[index++]) {
  if (itemWhileLoop.need) {
    htmlWhileLoop += `<li>${itemWhileLoop.text}</li>`;
    totalCostWhileLoop += itemWhileLoop.cost;
  }
}

// Display the shopping list and total cost on the webpage
document.getElementById("listWhileLoop").innerHTML = htmlWhileLoop;
document.getElementById("costWhileLoop").innerHTML = `Total Cost: ₹${totalCostWhileLoop}`;