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

Step 30)
JavaScript interacts with the HTML using the Document Object Model, or DOM. The DOM is a tree of objects that represents the HTML. You can access the HTML using the document object, which represents your entire HTML document.
One method for finding specific elements in your HTML is using the querySelector() method. The querySelector() method takes a CSS selector as an argument and returns the first element that matches that selector. For example, to find the <h1> element in your HTML, you would write:
let h1 = document.querySelector("h1");
Note that h1 is a string and matches the CSS selector you would use.
Create a button1 variable and use querySelector() to assign it your element with the id of button1. Remember that CSS id selectors are prefixed with a #.

Step 32
button1 is a variable that is not going to be reassigned. If you are not going to assign a new value to a variable, it is best practice to use the const keyword to declare it instead of the let keyword. This will tell JavaScript to throw an error if you accidentally reassign it.
Change your button1 variable to be declared with the const keyword.

Step 33)
Use querySelector() to get the other two button elements using their ids: button2 and button3. Store them in variables called button2 and button3. Remember to use const.

Step 34)
Just like you did with the buttons, create variables for the following ids and use querySelector() to give them the element as a value:
text, xpText, healthText, goldText, monsterStats, and monsterName.
Remember to declare these with the const keyword, and name the variables to match the ids.

Step 35)
Finally, use querySelector() to get the #monsterHealth element. Because you have already declared a monsterHealth variable earlier, you need to use a different variable name for this element.
Declare a new variable with the const keyword and name it monsterHealthText.

Step 37)
button1 represents your first button element. These elements have a special property called onclick, which you can use to determine what happens when someone clicks that button.
You can access properties in JavaScript a couple of different ways. The first is with dot notation. Accessing the onclick property of a button would look like:
button.onclick
Use dot notation to set the onclick property of your button1 to the function reference of goStore. This function will be something you write later. Note that button1 is already declared, so you don't need to use let or const.

Step 38)
Using the same syntax, set the onclick properties of button2 and button3 to goCave and fightDragon respectively.

Step 39)
Functions are special tools that allow you to run sections of code at specific times. You can declare functions using the function keyword. Here is an example of a function called functionName - note the opening and closing curly braces. These indicate the section of code that is within the function.
function functionName() { }
Create an empty function named goStore. This will match the goStore variable you used earlier.

Step 40)
For now, make your goStore function output the message Going to store. to the console. For example, here is a function that outputs the message Hello World.
function functionName() {
    console.log("Hello World");
}

Step 43)
The innerText property controls the text that appears in an HTML element. For example:
const info = document.querySelector("#info");
info.innerText = "Hello World";
This code would change the element assigned to the info variable to have the text Hello World.
When a player clicks your Go to store button, you want to change the buttons and text. Remove the code inside the goStore function and add a line that updates the text of button1 to say Buy 10 health (10 gold)

Step 44)
Now, add a line that updates the text of button2 to say Buy weapon (30 gold) and update the text of button3 to say Go to town square.

Step 45)
You will also need to update the functions that run when the buttons are clicked again.
In your goStore() function, update the onclick property for each button to run buyHealth, buyWeapon, and goTown, respectively.

Step 46)
Now you need to modify your display text. Change the innerText property of the text to be You enter the store.

Step 47)
Create three new empty functions called buyHealth, buyWeapon, and goTown.

Step 48)
Move your goTown function above your goStore function. Then copy and paste the contents of the goStore function into the goTown function.

Step 49)
In your goTown function, change your button elements' innerText properties to be Go to store, Go to cave, and Fight dragon. Update your onclick properties to be goStore, goCave, and fightDragon, respectively.
Finally, update innerText property of your text to be You are in the town square. You see a sign that says Store..

Step 51)
You have repetition in the goTown and goStore functions. When you have repetition in your code, this is a sign that you need another function. Functions can take parameters, which are values that are given to the function each time it is run. Here is a function that takes a parameter called param:
function myFunction(param) {
    console.log(param);
}
Create an empty update function that takes a parameter called location.

Step 52)
Create a variable called locations and set it to an empty array

Step 53)
You previously used an array to store strings. But arrays can store any data type. This time, your array will be storing objects. Objects are similar to arrays, but with a few differences. One difference is that objects use properties, or keys, to access and modify data.
Objects are indicated by curly braces. An empty object would look like {}.
Add an empty object to your locations array.

Step 54)
Object properties are written as key: value pairs, where key is the name of the property (or the key), and value is the value that property holds. For example, here is an object with a key of name set to Quincy Larson.
{
  name: "Quincy Larson"
}
Add a name property to your empty object and give it a value of town square.

Step 55)
Just like array values, object properties are separated by a comma. Add a comma after your name property and add a button text property with the value of an empty array.
Note that, because the property name has more than one word, you'll need to surround it in quotes. For example:
{
  name: "Naomi",
  "favorite color": "purple"
}

Step 56)
Give your empty button text array three string elements. Use the three strings being assigned to the button innerText properties in the goTown function. Remember that array values are separated by commas.

Step 57)
Create another property in your object called button functions. Give this property an array containing the three functions assigned to the onclick properties in the goTown function. Remember that these functions are variables, not strings, and should not be wrapped in quotes.

Step 58)
Add one final property to the object named text. Give this property the same string value as the one assigned to text.innerText in the goTown function.

Step 59)
Add a second object to your locations array (remember to separate them with a comma). Following the pattern you used in the first object, create the same properties but use the values from the goStore function. Set the name property to store.

Step 60)
Now you can consolidate some of your code. Start by copying the code from inside the goTown function and paste it into your update function. Then, remove all the code from inside the goTown and goStore functions.

Step 61)
Instead of assigning the innerText and onclick properties to specific strings and functions, the update function will use data from the location that is passed into it. First, that data needs to be passed.
Inside the goTown function, call the update function. 
*/

let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

const button1 = document.querySelector('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
const weapons = [
  { name: 'stick', power: 5 },
  { name: 'dagger', power: 30 },
  { name: 'claw hammer', power: 50 },
  { name: 'sword', power: 100 }
];
const locations = [
  {
    name: "town square",
    "button text": ["Go to store", "Go to cave", "Fight dragon"],
    "button functions": [goStore, goCave, fightDragon],
    text: "You are in the town square. You see a sign that says \"Store\"."
  },
  {
    name: "store",
    "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "You enter the store."
  },
  {
    name: "cave",
    "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
    "button functions": [fightSlime, fightBeast, goTown],
    text: "You enter the cave. You see some monsters."
  }
];

// initialize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function update(location) {
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  text.innerText = location.text;
}

function goTown() {
  update(locations[0]);
}

function goStore() {
  update(locations[1]);
}

function goCave() {
  update(locations[2]);
}

function fightDragon() {
  console.log("Fighting dragon.");
}

function buyHealth() {
  if (gold >= 10) {
    gold -= 10;
    health += 10;
    goldText.innerText = gold;
    healthText.innerText = health;
  } else {
    text.innerText = "You do not have enough gold to buy health.";
  }
}

function buyWeapon() {
  if (currentWeapon < 3) {
    if (gold >= 30) {
      gold -= 30;
      currentWeapon++;
      goldText.innerText = gold;
      let newWeapon = weapons[currentWeapon].name;
      text.innerText = "You now have a " + newWeapon + ".";
      inventory.push(newWeapon);
      text.innerText += " In your inventory you have: " + inventory;
    } else {
      text.innerText = "You do not have enough gold to buy a weapon.";
    }
  }
}

function fightSlime() {

}

function fightBeast() {

}