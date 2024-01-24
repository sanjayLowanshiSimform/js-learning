const fetch = require('node-fetch');

// Function to fetch weather data from a hypothetical API
async function getWeatherData(city) {
  try {
    const apiKey = 'your-api-key'; // Replace with your actual API key
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    // Using fetch from node-fetch to make the API request
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch weather data for ${city}`);
    }

    // Parse the JSON response
    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(`Error in getWeatherData: ${error.message}`);
  }
}

// Using the async function
async function displayWeather(city) {
  try {
    console.log(`Fetching weather data for ${city}...`);

    // Call the asynchronous function to get weather data
    const weatherData = await getWeatherData(city);

    // Display relevant information from the weather data
    console.log(`Current weather in ${city}:`);
    console.log(`Temperature: ${weatherData.current.temp_c}°C`);
    console.log(`Condition: ${weatherData.current.condition.text}`);
    console.log(`Humidity: ${weatherData.current.humidity}%`);

  } catch (error) {
    console.error(error.message);
  }
}

// Example: Display weather for New York
displayWeather('New York');
