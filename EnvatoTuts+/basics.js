let numbers = [0, 1, 2 , 3 , 4, 5, 6, 7, 8 ];
console.log(numbers);

numbers[5] = 10;
console.log(numbers);
// To add element at the end of an array
numbers.push(11);
console.log(numbers);

// To add element at the front of an array
numbers.unshift(12);
console.log(numbers);

// To remove element from the end of an array
let lastNum = numbers.pop();
console.log(numbers);
console.log(lastNum);

// To remove element from the front of an array
let firstNum = numbers.shift();
console.log(numbers);
console.log(firstNum);

// to remove element from an perticular index, and number of elements want to remove .splice(4, 2)
console.log(numbers);
numbers.splice(4, 2);
console.log(numbers);

