/*
NOTES : 
Points to Cover in KEKA Goals :
1. Looping Arrays, Breaking and Continuing
2. Looping Backwards and Loops in Loops
3. The while Loop



1. Looping Arrays, Breaking and Continuing
- In the context of "Looping Arrays, Breaking and Continuing", the JavaScript array method that could be used is the forEach(), find() method.

The forEach() method executes a provided function once for each array element. It allows you to iterate over the elements of an array and perform an action on each element. You can break out of the loop using the break statement, but it's not commonly used within forEach() loops. Instead, you typically use return to exit the current iteration and continue to the next one.


The find() method returns the first element in an array that satisfies a provided testing function. It stops iterating once such an element is found and returns that element. This can be useful when searching for a specific element that meets certain criteria in an array.
*/

const fruits = ['apple', 'banana', 'orange', 'kiwi'];

fruits.forEach(fruit => {
    console.log(fruit);
});

// Double each number in an array:
const numbers1 = [1, 2, 3, 4, 5];

numbers1.forEach((num, index, arr) => {
    arr[index] = num * 2;
});

console.log(numbers1);

// Sum all elements of an array:
const numbers2 = [1, 2, 3, 4, 5];
let sum = 0;

numbers2.forEach(num => {
    sum += num;
});

console.log("Sum:", sum);

// Find and print the length of each string in an array:
const words = ['apple', 'banana', 'orange', 'kiwi'];

words.forEach(word => {
    console.log(word.length);
});


// Manipulating objects in an array:
const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Alice' },
    { id: 3, name: 'Bob' }
];

users.forEach(user => {
    user.isAdmin = user.id === 1; // Add isAdmin property based on id
});

console.log(users);
// Filtering out elements from an array:
const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumbers = [];
const evenNumbers = [];

numbers3.forEach(num => {
    if (num % 2 === 0) {
        evenNumbers.push(num);
    } else {
        oddNumbers.push(num);
    }
});

console.log("Odd numbers:", oddNumbers);
console.log("Even numbers:", evenNumbers);

// Generating a new array based on existing one:
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = [];
numbers.forEach(num => {
    doubledNumbers.push(num * 2);
});

console.log("Doubled numbers:", doubledNumbers);

/*
2. Looping Backwards and Loops in Loops
The JavaScript array method that is commonly used for looping backwards through arrays is reverse().

The reverse() method reverses the order of the elements in an array in place. It mutates the original array and returns a reference to the array, with the elements reversed.

forEach(): While not specifically designed for looping backwards, you can use it in combination with methods like reverse() to iterate over elements in reverse order.

reduceRight(): This method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value. It's particularly useful for performing operations that need to be done in reverse order.


for...of loop: This is not an array method, but it's a language feature in JavaScript that allows you to iterate over the values of an iterable object (including arrays) in forward order. However, you can easily loop backwards by combining it with reverse() method.
*/
const words2 = ['Hello', 'world', '!'];

const reversedString = words2.reduceRight((acc, word) => {
    return acc + ' ' + word;
}, '');

console.log(reversedString);

const numbers4 = [1, 2, 3, 4, 5];

for (const num of numbers4.reverse()) {
    console.log(num);
}

// Example: Multiplication table using map and forEach
const numbers5 = Array.from({ length: 10 }, (_, index) => index + 1);

numbers5.forEach(i => {
    const row = numbers5.map(j => i * j).join('  ');
    console.log(row);
});

// Looping Backwards and Loops in Loops Together with Array Methods:
// Example: Print elements of a 2D array in reverse order using flatMap
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const flatMatrix = matrix.flatMap(row => row).reverse();
flatMatrix.forEach((num, index) => {
    const row = Math.floor(index / matrix[0].length);
    const col = index % matrix[0].length;
    console.log("Element at index (" + row + "," + col + "):", num);
});