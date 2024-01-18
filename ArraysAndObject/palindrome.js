arr = [
  1123,
  142,
  35225,
  556,
  656,
  444,
  "madam",
  "hello",
  "radar",
  "never odd or even",
  "nope",
  "almostomla",
  "my age is 0,0 si ega ym.",
  "0_0 (: /- :) 0-0",
  "five|_/|four",
];
console.log(arr);

// function to check if a array item is a palindrome
function isPalindrome(arrItem) {
  console.log(arrItem);
  const stringWithoutSpaces = arrItem.replace(/[^a-zA-Z0-9]/g, "");
  // split the array item and store it in splitItem
  const splitItem = stringWithoutSpaces.split("");
  console.log(splitItem);
  // reverse the splitted array item and store it in revItem
  const revItem = splitItem.slice().reverse();
  console.log(revItem);
  // join the reversed array item and store it in joinItem
  const joinItem = revItem.join("");
  console.log(joinItem);
  return stringWithoutSpaces === joinItem;
}

// Function to check palindromes in an array and display the result
function checkPal(arr) {
  arr.forEach((item) => {
    const result = isPalindrome(item.toString());
    // console.log(result);
    // true = "is" , false = "is not"
    const status = result ? "is" : "is not";
    // console.log(status);
    console.log(`${item} ${status} a palindrome`);
  });
}

checkPal(arr);
