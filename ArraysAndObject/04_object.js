// singleton : object made from constructor
// Object.create

// object literal

const mySym = Symbol("key1")
typeof mySym; // "symbol"

const JsUser = {
  name: "Sanjay",
  "full name" : "Sanjay Lowanshi",
  [mySym] : "mykey1",
  age: 24,
  city: "Nashik",
  email: "sanjay@gmail.com",
  isLoggedIn : true,
};

console.log(JsUser);
console.log(JsUser.name);
console.log(JsUser.age); 
console.log(JsUser.city);
// 2nd method to access object elements
console.log(JsUser["name"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);

console.log(JsUser["email"]);
JsUser.email = "sanjay@simform.com"
console.log(JsUser["email"]); 
console.log(JsUser);  

JsUser.greetings = function() {
  console.log("Hello JsUer!")
}
JsUser.greetings2 = function() {
  console.log(`Hello ${this.name}`)
}
console.log(JsUser.greetings2());