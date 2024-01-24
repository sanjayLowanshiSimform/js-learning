// Function to load an image asynchronously using async/await
async function loadImage(url) {
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

// Using the async/await
async function loadImageAsync() {
  console.log("Start loading image...");

  try {
    const result = await loadImage("https://example.com/image.jpg");
    console.log(result);
  } catch (error) {
    console.error(error);
  }

  console.log("Continue with other tasks...");
}

// Call the async function
loadImageAsync();
