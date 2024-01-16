let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8, 10];
let vowels = ["a", "e", "i", "o", "u"];


let numbers = odd.concat(even, vowels);

console.log(numbers);

// using spread operator

let alphanumeric = [ ...odd, ...even, ...vowels];
console.log(alphanumeric);