// 1. Write a JavaScript function to check whether an 'input' is a string or not.
const is_string = (input) => typeof input === "string";
// OUTPUT
console.log(typeof "w3resource");
console.log(is_string("w3resource"));
console.log(is_string([1, 2, 4, 0]));

// 2. Write a JavaScript function to check whether a string is blank or not.
const is_blank = (input) => input.length === 0;
// OUTPUT
console.log(is_blank("sanjay"));
console.log(is_blank(""));

// 3. Write a JavaScript function to split a string and convert it into an array of words.
const stringToArray = (input) => input.trim().split(" ");
// OUTPUT
console.log(stringToArray("Sanjay Lowanshi"));
/*
NOTE
we can write this function without using .trim(). However, using trim() will remove any leading or trailing whitespace characters from the string before splitting it, which might be desirable to ensure that no empty strings are included in the resulting array if there are leading or trailing spaces in the input string. */

// 4. Write a JavaScript function to extract a specified number of characters from a string.
const truncateString = (input, num) => {
  if (typeof input === "string" && num > 0) {
    return input.slice(0, num);
  }
};
// OUTPUT
console.log(truncateString("Sanjay Lowanshi", 4));

// 5. Write a JavaScript function to convert a string into abbreviated form.
const abbrevName = (input) => {
  split_name = input.trim().split(" ");
  console.log(split_name);
  return `${split_name[0]} ${split_name[1].charAt(0)}.`;
};
// OUTPUT
console.log(abbrevName("Sanjay Lowanshi"));

// 6. Write a JavaScript function that hides email addresses to prevent unauthorized access.
const protectEmail = (input) => {
  splittedEmail = input.split("@");
  part1 = splittedEmail[0];
  avg = part1.length / 2;
  part1 = part1.substring(0, part1.length - avg);
  part2 = splittedEmail[1];
  return `${part1}...@${part2}`;
};
// OUTPUT
console.log(protectEmail("lowanshi.sanjay98@gmail.com"));

// 7. Write a JavaScript function to parameterize a string.
const parameterizeString = (input) => {
  const text = input;
  return text.trim().toLowerCase().replaceAll(" ", "-");
};
// OUTPUT
console.log(parameterizeString("Sanjay Lowanshi from Nashik."));

// 8.  Write a JavaScript function to capitalize the first letter of each word in a string..
const capitalizeWords = (input) => {
  splitString = input.trim().split(" ");
  console.log(splitString);
  const capitalizedWords = splitString.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  return capitalizedWords.join(" ");
};
// OUTPUT
console.log(capitalizeWords("this is to capitalize each word"));

// 9. Write a JavaScript function that takes a string with both lowercase and upper case letters as a parameter. It converts upper case letters to lower case, and lower case letters to upper case.
const swapCase = (input) => {
  let swapped = "";
  for (let index = 0; index < input.length; index++) {
    const char = input[index];
    if (char === char.toUpperCase()) {
      swapped += char.toLowerCase();
    } else {
      swapped += char.toUpperCase();
    }
  }
  return swapped;
};
// OUTPUT
console.log(swapCase("oUNgAbOuNGa"));

// 10. Write a JavaScript function to convert a string into camel case.
const camelize = (input) => {
  const regex = /\W+(.)/g;
  camelizeString = input.replace(regex, (match, firstLetterAfterNonWord) =>
    firstLetterAfterNonWord.toUpperCase()
  );
  return camelizeString;
};
// OUTPUT
console.log(camelize("JavaScript exercise practice"));

// 11. Write a JavaScript function to uncommelize a string.
const uncamelize = (input, separator = " ") => {
  randomString = input.replace(/[A-Z]/g, (letter) => {
    return separator + letter.toLowerCase();
  });
  return randomString;
};
// OUTPUT
console.log(uncamelize("helloWorld"));
console.log(uncamelize("helloWorld", "-"));
console.log(uncamelize("helloWorld", "_"));

// 12. Write a JavaScript function to concatenate a given string n times (default is 1).
// 21. Write a JavaScript function to repeat a string for a specified time.
const repeat = (input, count) => {
  const checkCount =
    typeof count === "undefined" ||
    input == null ||
    count < 0 ||
    count === Infinity ||
    count == null
      ? "Error in string or count!!"
      : input.repeat(count);
  return checkCount;
};
// OUTPUT
console.log(repeat("a"));
console.log(repeat("a", 4));
console.log(repeat("ha!", 3));

// 13. Write a JavaScript function to insert a string within a string at a particular position (default is 1).
const insert = (input, insertStr, pos) => {
  pos = typeof pos === "undefined" ? 0 : pos;
  insertStr = typeof insertStr === "undefined" ? "" : insertStr;
  console.log(input.slice(0, pos));
  console.log(insertStr);
  console.log(input.slice(pos));
  return input.slice(0, pos) + insertStr + input.slice(pos);
};
// OUTPUT
console.log(insert("We are doing some exercises."));
console.log(insert("We are doing some exercises.", "JavaScript "));
console.log(insert("We are doing some exercises.", "JavaScript ", 18));

// 14. Write a JavaScript function that format a number in a human-readable string with the correct suffix, such as 1st, 2nd, 3rd, etc.
// Traditional JS Approach
const humanizeFormat = (input) => {
  checkNum = typeof input === "undefined" ? "th" : input;
  console.log(checkNum);
  if (input % 100 >= 11 && input % 100 <= 13) {
    return input + "th";
  } else {
    switch (input % 10) {
      case 1:
        return input + "st";
      case 2:
        return input + "nd";
      case 3:
        return input + "rd";
    }
    return input + "th";
  }
};
// OUTPUT
console.log(humanizeFormat());
console.log(humanizeFormat(11));
console.log(humanizeFormat(8));
console.log(humanizeFormat(301));
console.log(humanizeFormat(402));

// Modern JS Approach
const humanizeFormat2 = (input) => {
  const suffix =
    typeof input === "undefined"
      ? " "
      : input % 100 >= 11 && input % 100 <= 13
      ? "th"
      : input % 10 === 1
      ? "st"
      : input % 10 === 2
      ? "nd"
      : input % 10 === 3
      ? "rd"
      : "th";

  return input + suffix;
};
// OUTPUT
console.log(humanizeFormat2());
console.log(humanizeFormat2(11));
console.log(humanizeFormat2(8));
console.log(humanizeFormat2(301));
console.log(humanizeFormat2(402));

// 15. Write a JavaScript function to truncate a string if it is longer than the specified number of characters. Truncated strings will end with a translatable ellipsis sequence ("...") (by default) or specified characters.
const textTruncate = (input, pos, char) => {
  checkPos = pos == null ? (pos = 100) : pos;
  console.log(checkPos);
  checkChar = char == null ? (char = "...") : char;
  console.log(checkChar);
  checkInput =
    input.length > checkPos
      ? input.substring(0, checkPos - checkChar.length) + char
      : input;
  return checkInput;
};
// OUTPUT
console.log(textTruncate("We are doing JS string exercises."));
console.log(textTruncate("We are doing JS string exercises.", 19));
console.log(textTruncate("We are doing JS string exercises.", 15, "!!"));

// 16. Write a JavaScript function to chop a string into chunks of a given length.
const stringChop = (str, num) => {
  checkStr = str == null ? [] : str;
  num = ~~num; // OR -> num = parseInt(num);
  /* NOTE
  This line uses the bitwise NOT operator ~ twice to convert num to an integer. This operation is a shorthand way to convert num to an integer equivalent to using parseInt(). It's a common JavaScript trick for converting strings to numbers. */
  console.log(num);
  checkNum = num > 0 ? str.match(new RegExp(".{1," + num + "}", "g")) : [str];
  return checkNum;
};
// OUTPUT
console.log(stringChop("w3resource"));
console.log(stringChop("w3resource", 2));
console.log(stringChop("w3resource", 3));

// 17. Write a JavaScript function to count substrings in a string.
const count = (str, substr) => {
  let count = 0;
  for (i = 0; i <= str.length - -substr.length; i++) {
    if (str.substring(i, i + substr.length) === substr) {
      count++;
    }
  }
  return count;
};
// OUTPUT
console.log(count("The quick brown fox jumps over the lazy dog", "the"));
console.log(count("The quick brown fox jumps over the lazy dog", "fox", false));

// 18. Write a JavaScript function to escape a HTML string.
const escapeHTML = (input) => {
  "use strict";
  return input.replace(/[&<>"]/g, (tag) => {
    switch (tag) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      default:
        return tag;
    }
  });
};
// OUTPUT
console.log(
  escapeHTML('<a href="javascript-string-exercise-17.php" target="_blank">')
);

// 24. Write a JavaScript function to truncate a string to a certain number of words.
const truncate21 = (str, num) => {
  return str.split(" ").splice(0, num).join(" ");
}
// OUTPUT
console.log(truncate21('The quick brown fox jumps over the lazy dog', 4));

// 25. Write a JavaScript function to alphabetize a given string.
// Alphabetize string : An individual string can be alphabetized. This rearranges the letters so they are sorted A to Z.
const alphabetizeString = (input) =>{
  return input.split('').sort().join("").trim();
}
// OUTPUT
console.log(alphabetizeString('United States'));

// 26. Write a JavaScript function to remove the first occurrence of a given 'search string' from a string.
const removeFirstOccurrence = (str, searchStr) => {
  const index = str.indexOf(searchStr); 
  result = index === -1 ? str : str.slice(0, index) + str.slice(index + searchStr.length);
  return result;
}
// OUTPUT
console.log(removeFirstOccurrence("The quick brown fox jumps over the lazy dog", 'fox'));

// 27. Write a JavaScript function to convert ASCII to Hexadecimal format.
const asciiToHexa = (input) => {
  let hex = '';
  for (let i = 0; i < input.length; i++) {
    // Get the ASCII code for each character in the input
    const asciiCode = input.charCodeAt(i);
    // Convert the ASCII code to hexadecimal and concatenate it to the 'hex' string
    hex += asciiCode.toString(16).padStart(2, '0');
  }
  return hex;
}
// OUTPUT
console.log(asciiToHexa('12'));
console.log(asciiToHexa('100'));

// 35. Write a JavaScript function to remove HTML/XML tags from a string.
const stripHtmlTags = (str) =>
{
  str =  ((str===null) || (str==='')) ? false : str.toString();
  return str.replace(/<[^>]*>/g, '');
}
// OUTPUT
console.log(stripHtmlTags('<p><strong><em>JS Learning & Exercises</em></strong></p>'));

// 38. Write a JavaScript function to create a case-insensitive search.
const caseInsensitiveSearch = (str, searchStr) => {
  let result = str.search(new RegExp(searchStr, 'i'));
  console.log(result);
  return result > 0 ? "Matched" : "Not Matched";
}

// OUTPUT
console.log(caseInsensitiveSearch('lazy fox', 'Fox'));
console.log(caseInsensitiveSearch('JavaScript Exercises', 'Exercises'));
console.log(caseInsensitiveSearch('JavaScript Exercises', 'Exercisess'));