let list = [
	'bacon',
	'eggs',
	'butter',
	'milk',
	'bread',
	'bacon',
    {text: 'bread', cost: 3 }
];

// -1, index
console.log(list.indexOf('bacon', 1));
console.log(list.lastIndexOf('bacon'));
console.log(list.findIndex((item) => item.text === 'bread'));

/*
The some() method in JavaScript is used to test whether at least one element in an array passes a given condition. It returns a boolean value indicating whether any element of the array satisfies the provided testing function.

Here's the basic syntax of the some() method:

- array.some(callback(element[, index[, array]])[, thisArg])


- callback: Function to test for each element, taking three arguments:
- element: The current element being processed in the array.
- index (optional): The index of the current element being processed in the array.
- array (optional): The array some was called upon.
- thisArg (optional): Object to use as this when executing the callback function.

The some() method stops iterating over the array once it finds an element that satisfies the provided condition and returns true. If no such element is found, it returns false.

*/

const result = list.some(function(element) { return element.length > 5});
console.log(result);

const startsWithB = list.some(function(element) {
  // Check if the element is a string and starts with 'b'
  return typeof element === 'string' && element.startsWith('b');
});

console.log(startsWithB); 