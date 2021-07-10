import apiActions from './api-actions/api-actions.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
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
