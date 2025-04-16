const apiKey = 'ab028cb58c805f90db72d05db727c890';
const city = 'Lagos';

async function getWeatherData() {
  const currentURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

  const currentRes = await fetch(currentURL);
  const currentData = await currentRes.json();

  document.getElementById('current-temp').textContent = `${currentData.main.temp.toFixed(1)}°C`;
  document.getElementById('weather-desc').textContent = currentData.weather[0].description;

  const forecastRes = await fetch(forecastURL);
  const forecastData = await forecastRes.json();

  const forecastContainer = document.getElementById('forecast');
  forecastContainer.innerHTML = '';
  const forecastDays = forecastData.list.filter(item => item.dt_txt.includes('12:00:00')).slice(0, 3);
  forecastDays.forEach(day => {
    const date = new Date(day.dt_txt);
    forecastContainer.innerHTML += `
      <div class="forecast-card">
        <strong>${date.toDateString()}</strong>
        <p>${day.main.temp.toFixed(1)}°C</p>
        <p>${day.weather[0].description}</p>
      </div>`;
  });  
}
getWeatherData();