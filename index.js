document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = '613861d08c7d75a436096bc6ec1a3a47'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const cityName = data.name;
            const temperature = data.main.temp;
            const description = data.weather[0].description;

            document.getElementById('cityName').innerText = `Weather in ${cityName}`;
            document.getElementById('temperature').innerText = `Temperature: ${temperature}°C`;
            document.getElementById('description').innerText = `Description: ${description}`;
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
        });
});

