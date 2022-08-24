const weatherContainer = document.querySelector('.weather-data');
const weatherTemplate = document.getElementById('weather-template');

function displayDetails(data) {
  // clear previous displa
  weatherContainer.innerHTML = '';

  // Retrieve template
  const template = document.importNode(weatherTemplate.content, true);

  // Template Elements
  const location = template.querySelector('.location');
  const temp = template.querySelector('.temp');
  const type = template.querySelector('.type');
  const icon = template.querySelector('.icon');
  const desc = template.querySelector('.description');

  location.textContent = `${data.name}, ${data.sys.country}`;

  const temperature = convertKelvinToCelsius(data.main.temp);
  temp.innerHTML = `${temperature}&deg;C`;

  type.textContent = data.weather[0].main;
  desc.textContent = data.weather[0].description;

  const iconURL = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  icon.src = iconURL;

  weatherContainer.appendChild(template);
}

function displayError(error) {
  weatherContainer.innerHTML = '';
  const h2 = document.createElement('h2');
  h2.classList.add('error-msg');
  h2.textContent = error;
  weatherContainer.appendChild(h2);
}

function convertKelvinToCelsius(temp) {
  return (temp - 273).toFixed(1);
}

export { displayDetails, displayError };
