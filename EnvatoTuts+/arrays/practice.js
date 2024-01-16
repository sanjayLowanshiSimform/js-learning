//Examples:

// 1: Using a for loop to iterate from 1 to 5

for (let index = 0; index <= 5; index++){
  console.log(index);
}
console.log("hello");

// 2: Using a while loop to iterate until a condition is met
let count = 0;
while (count <= 5) { // condition
  console.log(count);
  count++;
}

// 3: Using a for...of loop to iterate through an array

const numbers = [1, 2, 3, 4, 5];
for (const num of numbers) {
  console.log(num);
}

// iterate through an array of fruits name and print only fruit starting with b letter
const fruits = ["orange", "plum", "apple", "berries", "banana"];
console.log(fruits);
for (const fruit of fruits) {
  console.log(fruit);
  if (fruit.charAt(0) === 'b') {
    console.log(fruit);
  }

}

// 4: Using a for...in loop to iterate through object properties
const person = {
  name: "sanjay",
  age: 25,
  city: "nashik"
};
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}