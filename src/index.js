import { getWeatherData } from './weather';

const searchInput = document.querySelector('input[name="location"]');
const searchBar = document.querySelector('.search-bar');
const mainContainer = document.querySelector('.weather-info');
const loadingBar = document.querySelector('.loader');

const location = mainContainer.querySelector('.location');
const temp = mainContainer.querySelector('.temp');

const type = mainContainer.querySelector('.type');
const icon = mainContainer.querySelector('.icon');
const desc = mainContainer.querySelector('.description');

function fetchData(location) {
  getWeatherData(location).then(data => {
    loadingBar.classList.add('hide');
    setUpWeatherComponent(data);
  });
}

searchBar.addEventListener('submit', e => {
  e.preventDefault();

  if (searchInput.value === '') return;

  searchBar.classList.add('adjust');
  mainContainer.classList.remove('hide');
  loadingBar.classList.remove('hide');

  clearContainer();
  fetchData(searchInput.value);
});

function setUpWeatherComponent(data) {
  const component = document.querySelector('.weather-data');
  component.classList.remove('hide');

  location.textContent = `${data.name}, ${data.sys.country}`;
  temp.innerHTML = `${(data.main.temp - 273).toFixed(1)}&deg;C`;

  type.textContent = data.weather[0].main;
  desc.textContent = data.weather[0].description;

  const iconURL = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  icon.src = iconURL;
}

function clearContainer() {
  location.textContent = '';
  temp.innerHTML = '';
  type.textContent = '';
  desc.textContent = '';
  icon.src = '';
}
