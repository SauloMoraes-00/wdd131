// Function to calculate wind chill factor
function calculateWindChill(temp, windSpeed, unit = 'F') {
  return unit === 'F' 
    ? 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16)
    : 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
}

// Example usage:
console.log(calculateWindChill(30, 10, 'F')); // Wind chill in Fahrenheit
console.log(calculateWindChill(-5, 20, 'C')); // Wind chill in Celsius

const temperature = 24
const windSpeed = 10
const windchill = calculateWindChill(temperature, windSpeed).toFixed(1);
const windChillDiv = document.getElementById ("windchill")
windChillDiv.innerHTML = `
<p><strong>Temperature: ${temperature}°C</strong></p>
<p><strong>Conditions: Partly Cloundy</strong></p>
<p><strong>Wind: ${windSpeed}km/h</strong></p>
<p><strong>Windchill: ${windchill}°C</strong></p>
`;