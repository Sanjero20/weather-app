import { getWeatherData } from './weather';
import { displayDetails, displayError } from './display';

// Search Bar
const searchInput = document.querySelector('input[name="location"]');
const searchBar = document.querySelector('.search-bar');

// Weather Data Container
const mainContainer = document.querySelector('.weather-info');
const loadingBar = document.querySelector('.loader');

// Weather Information
const weatherContainer = document.querySelector('.weather-data');

function fetchData(location) {
  getWeatherData(location)
    .then(data => {
      hideBuffer();
      displayDetails(data);
    })
    .catch(error => {
      hideBuffer();
      displayError(error);
    });
}

searchBar.addEventListener('submit', e => {
  e.preventDefault();
  const location = searchInput.value;
  if (location === '') return;

  searchInput.value = '';

  mainContainer.classList.remove('hide');
  showBuffer();
  fetchData(location);
});

function showBuffer() {
  searchBar.classList.add('adjust');
  weatherContainer.classList.add('hide');
  loadingBar.classList.remove('hide');
}

function hideBuffer() {
  loadingBar.classList.add('hide');
  weatherContainer.classList.remove('hide');
}
