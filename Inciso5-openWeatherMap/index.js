
async function getWeather() {

    //variables necesarias 
  const citylat = document.getElementById('citylat').value;
  const citylon = document.getElementById('citylon').value;
  const apiKey = 'a7f5037b5a841be9d88f74ed189de331';
  
  // API de open weather map
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${citylat}&lon=${citylon}&appid=${apiKey}&units=metric&lang=es`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Ubicación no encontrada');
    }
    const data = await response.json();

    // Extraemos y mostramos información relevante
    const weatherInfo = `
      <h2>Clima en ${data.name}, ${data.sys.country}</h2>
      <p>Temperatura: ${data.main.temp}°C</p>
      <p>Sensación Térmica: ${data.main.feels_like}°C</p>
      <p>Descripción: ${data.weather[0].description}</p>
      <p>Humedad: ${data.main.humidity}%</p>
      <p>Presión: ${data.main.pressure} hPa</p>
      <p>Viento: ${data.wind.speed} m/s (dirección: ${data.wind.deg}°)</p>
      <p>Lluvia (última hora): ${data.rain ? data.rain["1h"] : 'No hay datos'} mm</p>
      <p>Nubosidad: ${data.clouds.all}%</p>
      <p>Visibilidad: ${data.visibility} metros</p>
      <p>Hora de amanecer: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
      <p>Hora de atardecer: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
    `;

    document.getElementById('weatherInfo').innerHTML = weatherInfo;
  } catch (error) {
    document.getElementById('weatherInfo').innerHTML = `<p>Error: ${error.message}</p>`;
  }
}
