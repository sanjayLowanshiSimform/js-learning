// 1. Write a JavaScript function to check whether an `input` is an array or not.
const checkIsArray = (input) => {
  return Array.isArray(input); // The isArray() method returns true if an object is an array, otherwise false
};
// OUTPUT
console.log(checkIsArray("w3resource"));
console.log(checkIsArray([1, 2, 4, 0]));

// 2. Write a JavaScript function to clone an array.
const arrayClone = (input) => {
  return [...input];
};

// OUTPUT
console.log(arrayClone([0, 1, 2, 3, 4, 5]));
console.log(arrayClone([1, 2, [4, 0]]));

// 3. Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
const first = (array, n) => {
  if (array === null) return undefined;
  if (n == null) return array[0];
  if (n < 0) return [];
  return array.slice(0, n);
};
// OUTPUT
console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));

// 4. Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
const last = (array, n) => {
  if (array === null) return undefined;
  if (n == null) return array[array.length - 1];
  if (n < 0) return [];
  return array.slice(Math.max(array.length - n, 0));
}
// OUTPUT
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));

/* 5. Write a simple JavaScript program to join all elements of the following array into a string.
Sample array : myColor = ["Red", "Green", "White", "Black"]; */
const myColor = ["Red", "Green", "White", "Black"];
const result5 = myColor.join(", ");
console.log(result5);


/* 6. Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 254-6-8. */
const insertDashes = (number) => {
  const str = number.toString();
  const result6 = [];
  for (let i = 0; i < str.length; i++) {
    if (parseInt(str[i]) % 2 === 0 && parseInt(str[i + 1]) % 2 === 0) {
      result6.push(str[i], "-");
    } else {
      result6.push(str[i]);
    }
  }
  return result6.join("");
};

console.log(insertDashes(25468));


/* 7. Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8 */
const arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
arr1.sort((a, b) => a - b);
const result7 = arr1.join(",");
console.log(result7);


/* 8. Write a JavaScript program to find the most frequent item in an array.
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times ) */
const arr8 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
const freqMap = {};
let maxFreq = 0;
let frequentItem = null;

arr8.forEach(item => {
  freqMap[item] = (freqMap[item] || 0) + 1;
  if (freqMap[item] > maxFreq) {
    maxFreq = freqMap[item];
    frequentItem = item;
  }
});

console.log(`${frequentItem} ( ${maxFreq} times )`);

/* 9. Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'. */

const swapCase = (str) => {
  return str.split("").map(char => {
    if (char === char.toUpperCase()) {
      return char.toLowerCase();
    } else {
      return char.toUpperCase();
    }
  }).join("");
};

console.log(swapCase('The Quick Brown Fox'));

/*
10. Write a JavaScript program that prints the elements of the following array.
Note : Use nested for loops.
Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
Sample Output :
"row 0"
" 1"
" 2"
" 1"
" 24"
"row 1" */
const a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

for (let i = 0; i < a.length; i++) {
  console.log(`"row ${i}"`);
  for (let j = 0; j < a[i].length; j++) {
    console.log(`"${a[i][j]}"`);
  }
}


// 11. Write a JavaScript program to find the sum of squares of a numerical vector.
const sumOfSquares = (vector) => {
  return vector.reduce((sum, num) => sum + (num * num), 0);
};

const vector = [1, 2, 3, 4, 5];
console.log("Sum of squares:", sumOfSquares(vector));


// 12. Write a JavaScript program to compute the sum and product of an array of integers.
const computeSumAndProduct = (array) => {
  const sum = array.reduce((acc, num) => acc + num, 0);
  const product = array.reduce((acc, num) => acc * num, 1);
  return { sum, product };
};

const array = [1, 2, 3, 4, 5];
console.log("Sum and product:", computeSumAndProduct(array));

// 13. Write a JavaScript program to add items to a blank array and display them.
const blankArray = [];
blankArray.push("item1", "item2", "item3");
console.log("Items in blank array:", blankArray);


// 14. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
const removeDuplicates = (array) => {
  return array.filter((value, index, self) => self.indexOf(value.toLowerCase()) === index);
};
const arrayWithDuplicates = ["apple", "Orange", "orange", "banana", "APPLE"];
const uniqueArray = removeDuplicates(arrayWithDuplicates);
console.log("Array with duplicates removed:", uniqueArray);

// 16. Write a JavaScript program to find the leap years in a given range of years.
const findLeapYears = (startYear, endYear) => {
  const leapYears = [];
  for (let year = startYear; year <= endYear; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      leapYears.push(year);
    }
  }
  return leapYears;
};

console.log("Leap years between 2000 and 2020:", findLeapYears(2000, 2020));

// 17. Write a JavaScript program to shuffle an array.
const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};
const originalArray = [1, 2, 3, 4, 5];
console.log("Shuffled array:", shuffleArray(originalArray));

/* 19. There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.
Sample array :
array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];
Expected Output :
[4, 5, 8, 10, 12, 13] */

const array1 = [1, 0, 2, 3, 4];
const array2 = [3, 5, 6, 7, 8, 13];

const sumOfIndexes = array1.map((num, index) => num + array2[index]);
console.log("Sum of individual index values:", sumOfIndexes);
