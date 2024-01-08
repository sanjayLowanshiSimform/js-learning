// JS Array Sort
// 1. Use the correct Array method to sort the CARS array alphabetically.
const cars = ["Saab", "Volvo", "BMW", "Audi"];
console.log(cars);
// Answer:
cars.sort();
console.log(cars);
cars.reverse();
console.log(cars);

/* Notes : 
Numeric Sort:
By default, the sort() function sorts values as strings.

This works well for strings ("Apple" comes before "Banana").

If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

Because of this, the sort() method will produce incorrect result when sorting numbers.

You can fix this by providing a compare function:
The Compare Function :
The purpose of the compare function is to define an alternative sort order.

The compare function should return a negative, zero, or positive value, depending on the arguments:

function(a, b){return a - b}

When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

If the result is negative, a is sorted before b.

If the result is positive, b is sorted before a.

If the result is 0, no changes are done with the sort order of the two values.
*/

const points = [40, 100, 1, 5, 25, 40, 10];
// To sort array in ascending order, use a - b
points.sort(function (a, b) {
  return a - b;
});
console.log(points);
// To sort array in descending order, use b - a
points.sort(function (a, b) {
  return b - a;
});
console.log(points);

// To find Min or Max using sort() in array:
const minmax = [56, 23, 78, 12, 45, 89, 34, 67];

//Method 1 : sort in Ascending order
let min = minmax.sort(function (a, b) {
  return a - b;
});
console.log(min);
// now array[0] contains the lowest value
console.log(min[0]);
// and array[array.length-1] contains the highest value
console.log(min[min.length - 1]);

//Method 2 : sort in Descending order
let max = minmax.sort(function (a, b) {
  return b - a;
});
console.log(max);
// now array[0] contains the highest value
console.log(max[0]);
// and array[array.length-1] contains the lowest value
console.log(min[min.length - 1]);

const minmax2 = [56, 23, 78, 12, 45, 89, 34, 67];
const min2 = Math.min.apply(null, minmax2);
console.log(min2);

// Min max function from scratch

function myArrayMin(arr) {
  let len = arr.length;
  let min = Infinity;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min;
}

function myArrayMax(arr) {
  let len = arr.length;
  let max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}

console.log(myArrayMin([56, 23, 78, 12, 45, 89, 34, 67]));
console.log(myArrayMax([56, 23, 78, 12, 45, 89, 34, 67]));
