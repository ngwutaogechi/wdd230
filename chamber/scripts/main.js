const apiKey = "ab028cb58c805f90db72d05db727c890"; // Replace this with your actual key
const city = "New York"; 
async function fetchWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data); 
    } catch (error) {
        console.error("Weather API error:", error);
    }
}

fetchWeather();

fetchWeather();

