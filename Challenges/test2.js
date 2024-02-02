
function findLongestWord(sentence) {
  const words = sentence.split(" ");
  let longestWord = "";
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

const sentence = "The quick brown fox jumps over the lazy dog";
console.log(findLongestWord(sentence)); // Output: "quick"

function factorial(number) {
  let result = 1;
  for (let i = 2; i <= number; i++) {
    result *= i;
  }
  return result;
}

const number = 5;
console.log(factorial(number)); // Output: 120

function removeDuplicates(inputString) {
  let uniqueCharacters = "";
  for (let char of inputString) {
    if (!uniqueCharacters.includes(char)) {
      uniqueCharacters += char;
    }
  }
  return uniqueCharacters;
}

const inputString = "hello world";
console.log(removeDuplicates(inputString)); // Output: "helo wrd"