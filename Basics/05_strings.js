// Notes : how to define strings
const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;
const string4 = new String("A String object");
/*
Character access
There are two ways to access an individual character in a string. The first is the charAt() method:
*/
console.log(string1.charAt(4));
console.log(string1[4]);
let studentName = "sanjay";
let studentAge = 25;

// this is old method of displaying string
console.log("hello my name is " + studentName + "and my age is " + studentAge);
console.log(studentName.length);

// new method : String interpolation
// use backticks `` and $ to use variables
console.log(`Hello im ${studentName}, and Im ${studentAge} years old`);

const gameName = new String("valorant");
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf("o"));
console.log(gameName.search('o'));


console.log(gameName.slice(2, 4));
console.log(string1.split(' '));
console.log(string2.split(' '));
console.log(string3.split(' '));
console.log(string3.replace('e', 'w'));
console.log(string3.replaceAll('e', 'w'));


