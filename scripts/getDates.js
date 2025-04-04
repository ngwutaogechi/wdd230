// Update the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// Update the last modified date
document.getElementById("last-modified").textContent = `Last modified: ${document.lastModified}`;

// Page Visit Counter
document.addEventListener("DOMContentLoaded", function () {
    let visitCount = localStorage.getItem("visitCount");

    if (!visitCount) {
        visitCount = 1; // First visit
    } else {
        visitCount = parseInt(visitCount) + 1;
    }

    document.getElementById("visit-counter").textContent = visitCount;
    localStorage.setItem("visitCount", visitCount);
});

const apiKey = '796b0fc32c2e19e8f0c4693c85ec1a82'; 
const city = 'Antananarivo'; // City name for weather
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

async function fetchWeather() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error("Weather data not available");

        const data = await response.json();

        // Extract weather details
        const temperature = Math.round(data.main.temp); // Round temp for readability
        const description = data.weather[0].description; // Weather condition
        const icon = data.weather[0].icon; // Weather icon code

        // Construct OpenWeatherMap icon URL
        const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

        // Update HTML elements dynamically
        document.getElementById("weather-temp").textContent = `${temperature}℉`;
        document.getElementById("weather-desc").textContent = description.charAt(0).toUpperCase() + description.slice(1); // Capitalize
        const weatherIcon = document.getElementById("weather-icon");
        weatherIcon.src = iconUrl;
        weatherIcon.style.display = "block"; // Make icon visible
        weatherIcon.alt = description; // Accessibility

    } catch (error) {
        console.error("Error fetching weather data:", error);
        document.getElementById("weather-temp").textContent = "N/A";
        document.getElementById("weather-desc").textContent = "Unable to fetch weather data";
    }
}

// Call function when the script loads
fetchWeather();