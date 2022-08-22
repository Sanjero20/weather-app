import { getWeatherData } from './weather';

const location = 'Manila';

// getWeatherData(location).then(data => {
//   console.log(data);
// });

const searchBar = document.querySelector('.search-bar');
const mainContainer = document.querySelector('.weather-info');
const loadingBar = document.querySelector('.loader');

searchBar.classList.add('adjust');

searchBar.addEventListener('submit', e => {
  e.preventDefault();
  searchBar.classList.add('adjust');

  mainContainer.classList.remove('hide');
  loadingBar.classList.remove('hide');
});
