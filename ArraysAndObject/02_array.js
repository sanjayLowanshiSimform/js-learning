const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros);
console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

// w3schools exercise

// JS Arrays
// 1. Get the value "Volvo" from the cars array.
const cars = ["Saab", "Volvo", "BMW", "Audi"];
// Answer:
let x = cars[1];
console.log(x);

// 2. Change the first item of cars to "Ford".
// Answer:
cars[0]= "Ford";
console.log(cars);

// 3. display the number of items in an array, using the correct Array property.
// Answer:
console.log(cars.length);

// JS Array Methods
// 1. Use the correct Array method to remove the last item of the fruits array.
const fruits = ["Apple", "Mango", "Banana"]
console.log(fruits);
// Answer:
fruits.pop();
console.log(fruits);

// 2. Use the correct Array method to add "Kiwi" to the fruits array.
// Answer:
fruits.push("Kiwi");
console.log(fruits);

// 3. Use the splice() method to remove "Orange" and "Apple" from fruits.
const fruits3 = ["Banana", "Orange", "Apple", "Kiwi"];
console.log(fruits3);
// Answer:
fruits3.splice(1, 2);
console.log(fruits3);