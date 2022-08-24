const API_KEY = '35c2fabe2299aa17c5051b992e8f52bd';

async function getWeatherData(location) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();

  if (data.cod !== 200) {
    throw new Error(data.message);
  }

  return data;
}

export { getWeatherData };
