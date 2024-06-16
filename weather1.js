
const API_KEY = '6e20e92a5b6eb7d1743aecf55862abbb';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

function getWeather() {
    const locationInput = document.getElementById('locationInput').value;
    
    if (locationInput) {
        const url = `${BASE_URL}?q=${locationInput}&appid=${API_KEY}&units=metric`;
        
        fetch(url)
            .then(response => response.json())
            .then(data => {
                displayWeather(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                displayError();
            });
    } else {
        alert('Please enter a location.');
    }
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    const { name, main, weather } = data;
    
    const temperature = main.temp;
    const description = weather[0].description;
    
    weatherInfo.innerHTML = `
        <h2>Weather in ${name}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Description: ${description}</p>
    `;
}

function displayError() {
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = '<p>Unable to fetch weather data. Please try again later.</p>';
}


