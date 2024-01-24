// Function to simulate fetching data from an API
function fetchData(apiEndpoint) {
  return new Promise((resolve, reject) => {
    // Simulate fetching data after 3 seconds
    setTimeout(() => {
      const success = true; // Assume data fetching is successful for this example

      if (success) {
        const data = { message: "Hello, this is your data!" };
        resolve(data);
      } else {
        reject("Error fetching data from the API");
      }
    }, 3000); // Simulate 3 seconds of data fetching
  });
}

// Using the promise
console.log("Start fetching data...");

// Call the function and handle the promise
fetchData("https://api.example.com/data")
  .then((data) => {
    console.log("Data received:", data);
  })
  .catch((error) => {
    console.error(error);
  });

console.log("Continue with other tasks...");
