/*
Step 19
Your view has been switched to your new script.js file. Remember that you can use the tabs above to switch between files.
Add your console.log("Hello World"); line to this file, and see it appear in your console.

Step 20)
Remove your console.log("Hello World"); line to begin writing your project code.
In JavaScript, a variable is used to hold a value. To use a variable, you must first declare it. For example, to declare a variable called camperbot, you would write:
var camperbot;
The var keyword tells JavaScript you are declaring a variable. Declare a variable called xp.

Step 21)
Variables can be assigned a value. When you do this while you declare it, this is called initialization. For example:
var camperbot = "Bot";
This would initialize the camperbot variable with a value of Bot, a string.
Initialize your xp variable to have a value of 0, a number.

Step 22)
Initialize another variable called health with a value of 100, and a variable called gold with a value of 50.

Step 23)
Create another variable called currentWeapon and set it to 0.
When a variable name has multiple words, the convention in JavaScript is to use what's called camelCase. The first word is lowercase, and the first letter of every following word is uppercase.

Step 24)
You have been declaring your variables with the var keyword. However, in modern JavaScript it is best practice to use the let keyword instead. This fixes several unusual behaviors with var that can make your code difficult to debug.
Change all of your var keywords to let.

Step 25)
Using the let keyword, declare a variable called fighting but do not initialize it with a value. Remember to end your line with a semi-colon.

Step 26)
Declare two more variables named monsterHealth and inventory, but do not initialize them.

Step 27)
The variables you have assigned have all had values that are numbers. JavaScript has multiple different data types. The next one you will use is the string. Strings are used to store things like words or text. Strings are surrounded with double quotes, single quotes, or backticks. Here is an example of declaring a variable with a string:
let developer = "Naomi";
Assign the inventory variable to have the value of stick.

Step 28)
The player's inventory in your game will be able to hold multiple items. You will need to use a data type that can do this. An array can be used to hold multiple values. For example:
let order = ["first", "second", "third"];
This is an array which holds three values. Notice how the values are separated by commas.
Change your inventory variable to be an array with the strings stick, dagger, and sword.

Step 29)
For now, you want the player to start with just the stick. Change the inventory array to have stick as its only value.
*/

let camperbot;
let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

