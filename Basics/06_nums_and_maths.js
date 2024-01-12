const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));
console.log(hundreds.toLocaleString('en-US'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)


// W3schools Exercises

// 1) Use the correct Math method to create a random number.
let r = Math.random();
console.log(r);
// 2) Use the correct Math method to return the largest number of 10 and 20.
let x = Math.max(10, 20);
console.log(x);
// 3) Use the correct Math method to round a number to the nearest integer.
let y = Math.round(5.3);
console.log(y);
// 4) Use the correct Math method to get the square root of 9.
let z = Math.sqrt(9);
console.log(z);


// Write a function that takes a number as input and returns the square of that number.

function calculateSquare(number) {
  return number * number;
}

console.log(calculateSquare(5));

// Write a function that takes a number as input and returns the cube of that number.

function calculateCube(number) {
  return number * number * number;
}

console.log(calculateCube(3));

// Write a function that takes the lengths of two sides of a right-angled triangle and returns the length of the hypotenuse.

function calculateHypotenuse(side1, side2) {
  return Math.sqrt(side1 ** 2 + side2 ** 2);
}

console.log(calculateHypotenuse(3, 4));

// Write a function that generates a random integer between a given range (inclusive).

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(generateRandomNumber(1, 10));

// Write a function that rounds a number to a specified number of decimal places.

function roundToDecimalPlaces(number, decimalPlaces) {
  return Number(number.toFixed(decimalPlaces));
}

console.log(roundToDecimalPlaces(3.14159, 2));

// Write a function that calculates the factorial of a given number.

function calculateFactorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * calculateFactorial(number - 1);
  }
}

console.log(calculateFactorial(5));

// Write a function that calculates the result of a number raised to the power of another number.

function calculatePower(base, exponent) {
  return Math.pow(base, exponent);
}

console.log(calculatePower(2, 3));

// Write a function that returns the absolute value of a number.

function calculateAbsoluteValue(number) {
  return Math.abs(number);
}

console.log(calculateAbsoluteValue(-5));

// Write a function that takes an array of numbers and returns the average.

function calculateAverage(numbers) {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

console.log(calculateAverage([1, 2, 3, 4, 5]));

// Write a function that calculates the Greatest Common Divisor (GCD) of two numbers.

function calculateGCD(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

console.log(calculateGCD(24, 36));