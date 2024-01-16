function addTwoNum(num1, num2) {
  let result = num1 + num2
  return result;
}

let result = addTwoNum(4, 5);
console.log(`result is ${result}`)
console.log(typeof result)


function loginUserName(username = "lowanshi") {
  if (!username) {
    console.log("Please enter a username!")
    return
  }
  return `${username} just logged in!!`
}

console.log(loginUserName());
console.log(loginUserName("sanjay"));


// An arrow function is a shorter and more concise way to write functions in JavaScript. It's a function expression, which is a function that's assigned to a variable. To write an arrow function, you can use the following syntax:

// Traditional function
function add(a, b) {
  return a + b;
}
console.log(add(3, 5)); // Output: 8

// Arrow function
const addArrow = (a, b) => {
  return a + b;
};
console.log(addArrow(3, 5));

// If the function body consists of a single expression, you don't need the curly braces and the return keyword. This is called an implicit return:

const addNum = (a, b) =>  a + b;
console.log(addNum(9, 5));