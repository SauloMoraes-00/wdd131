async function fetchWeather() {
    try {
      const apiKey = 'your_api_key_here'; // Replace with your OpenWeatherMap API key
      const url = `https://api.openweathermap.org/data/2.5/weather?q=Londrina,BR&units=metric&appid=${apiKey}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const data = await response.json();
      
      // Extract and display relevant weather info
      const temp = data.main.temp;
      const description = data.weather[0].description;
      const weatherInfo = `Temperature: ${temp}°C, ${description}`;
      
      document.getElementById('weather-info').textContent = weatherInfo;
    } catch (error) {
      document.getElementById('weather-info').textContent = 'Unable to fetch weather data.';
      console.error(error);
    }
  }