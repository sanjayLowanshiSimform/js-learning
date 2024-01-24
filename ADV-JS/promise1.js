
// Function that returns a promise to make coffee
function makeCoffee() {
  return new Promise((resolve, reject) => {
    // Simulate making coffee after 2 seconds
    setTimeout(() => {
      const success = true; // Assume making coffee is successful for this example

      if (success) {
        resolve("Here is your coffee!");
      } else {
        reject("Oops! Coffee making failed.");
      }
    }, 2000); // Simulate 2 seconds of coffee making
  });
}

// Using the promise
console.log("Start making coffee...");

// Call the function and handle the promise
makeCoffee()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

console.log("Continue with other tasks...");

