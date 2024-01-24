// Function to load an image asynchronously
function loadImage(url) {
  return new Promise((resolve, reject) => {
    // Simulate loading an image after 2 seconds
    setTimeout(() => {
      const success = true; // Assume image loading is successful for this example

      if (success) {
        resolve(`Image loaded from ${url}`);
      } else {
        reject(`Error loading image from ${url}`);
      }
    }, 2000); // Simulate 2 seconds of image loading
  });
}

// Using the promise
console.log("Start loading image...");

// Call the function and handle the promise
loadImage("https://example.com/image.jpg")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

console.log("Continue with other tasks...");
