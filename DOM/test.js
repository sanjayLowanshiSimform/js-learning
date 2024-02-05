let inputString = "your input string goes here";
let words = inputString.split(" ");
console.log(words);

words.forEach((word, index) => {
  const capitalizeWorld = word.charAt(0).toLocaleUpperCase() + word.slice(1);
  words[index] = capitalizeWorld;
})

let modifiedString = words.join(" ");

console.log(modifiedString);

const years = [1763, 1972, 1925, 1916, 1984, 1124, 1950, 2020]

function getYears(years) {
  
}