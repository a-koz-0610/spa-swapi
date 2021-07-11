import apiActions from './api-actions/api-actions.js';
import FilmsPage from './pages/FilmsPage.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import ImagesPage from './pages/ImagesPage.js';
import HomePage from './pages/HomePage.js';
import PeoplePage from './pages/PeoplePage.js';
import PersonPage from './pages/PersonPage.js';

buildPage();

function buildPage() {
  header();
  footer();
  navigateToHomePage();
  renderPeopleInfoList();
  renderPersonInfo();
  renderFilms();
  renderNasaImages();
}

function header() {
  const headerElement = document.querySelector('.header');
  headerElement.innerHTML = Header();
}

function footer() {
  const footerElement = document.querySelector('.footer');
  footerElement.innerHTML = Footer();
}

function navigateToHomePage() {
  const homeButton = document.querySelector('.nav__list_home');
  homeButton.addEventListener('click', () => {
    const app = document.querySelector('#app');
    app.innerHTML = HomePage();
  });
}

function renderPeopleInfoList() {
  const peopleButton = document.querySelector('.nav__list_people');
  peopleButton.addEventListener('click', () => {
    const app = document.querySelector('#app');
    apiActions.getRequest('https://swapi.dev/api/people', (people) => {
      app.innerHTML = PeoplePage(people);
    });
  });
}

//we need to use Event Delegation because we can ONLY attempt to query select the elem IF its being rendered
function renderPersonInfo() {
  const app = document.querySelector('#app'); //need to grab a Parent elem
  app.addEventListener('click', (event) => {
    //event delegation
    if (event.target.classList.contains('person__name')) {
      const personUrl =
        event.target.parentElement.querySelector('#personId').value;
      apiActions.getRequest(personUrl, (person) => {
        app.innerHTML = PersonPage(person);
      });
    }
  });
}
function renderFilms() {
  const filmsButton = document.querySelector('.nav__list_films');
  filmsButton.addEventListener('click', () => {
    const app = document.querySelector('#app');
    apiActions.getRequest('https://swapi.dev/api/films/', (films) => {
      app.innerHTML = FilmsPage(films);
    });
  });
}

function renderNasaImages() {
  const nasaImagesButton = document.querySelector('.nav__list_images');
  nasaImagesButton.addEventListener('click', () => {
    const app = document.querySelector('#app');
    apiActions.getRequest(
      'https://images-api.nasa.gov/search?q=location',
      (images) => {
        app.innerHTML = ImagesPage(images);
      }
    );
  });
}
