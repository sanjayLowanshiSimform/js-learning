const is_string = input => typeof input === 'string';
const is_blank = input => input.length === 0;

// Challenge :
// Write a JavaScript function to split a string and convert it into an array of words.
const stringToArray = input => input.trim().split(" ");
/*
NOTE:
we can write this function without using .trim(). However, using trim() will remove any leading or trailing whitespace characters from the string before splitting it, which might be desirable to ensure that no empty strings are included in the resulting array if there are leading or trailing spaces in the input string. */

const truncateString = (input, num) => {
  if(typeof input === 'string' && num > 0) {
    return input.slice(0, num);
  }
};

const abbrevName = input => {
  split_name = input.trim().split(" ");
  console.log(split_name);
  return `${split_name[0]} ${split_name[1].charAt(0)}.`
}

const protectEmail = input => {
  splittedEmail = input.split("@");
  part1 = splittedEmail[0];
  avg = part1.length / 2;
  part1 = part1.substring(0,(part1.length - avg));
  part2 = splittedEmail[1];
  return `${part1}...@${part2}`
}

const parameterizeString = input => {
  const text = input;
  return text.trim().toLowerCase().replaceAll(" ","-");
}

const capitalizeWords = input => {
  splitString = input.trim().split(" ");
  console.log(splitString);
  const capitalizedWords = splitString.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalizedWords.join(" ");
}

const swapCase = input => {
  let swapped = '';
  for (let index = 0; index < input.length; index++) {
    const char = input[index];
    if (char === char.toUpperCase()) {
      swapped += char.toLowerCase();
    } else {
      swapped += char.toUpperCase();
    }
  }
  return swapped;
}

console.log(typeof 'w3resource');
console.log(is_string('w3resource'));
console.log(is_string([1, 2, 4, 0]));
console.log(is_blank('sanjay'));
console.log(is_blank(''));
console.log(stringToArray("Sanjay Lowanshi"));
console.log(truncateString("Sanjay Lowanshi", 4));
console.log(abbrevName("Sanjay Lowanshi"));
console.log(protectEmail("lowanshi.sanjay98@gmail.com"));
console.log(parameterizeString("Sanjay Lowanshi from Nashik."));
console.log(capitalizeWords("this is to capitalize each word"));
console.log(swapCase("oUNgAbOuNGa"));