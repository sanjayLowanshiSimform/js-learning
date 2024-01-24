async function fetchData() {
  try {
    // Asynchronous operation
    const data = await somePromise;
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
