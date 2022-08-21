const API_KEY = '35c2fabe2299aa17c5051b992e8f52bd';

const location = 'manila';
const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

const getData = async () => {
  const weather = await fetch(url);
  const weatherData = await weather.json();

  return weatherData;
};

getData().then(data => {
  console.log(data);

  const details = data.weather[0];
  console.log(details);

  const location = data.name;
  console.log(`Location: ${location}`);

  const temp = data.main.temp;
  const celsius = kelvinToCelcius(temp);
  console.log(`Temperature: ${celsius.toFixed(2)}°C`);
});

function kelvinToCelcius(k) {
  return k - 273.15;
}
