import Header from './components/Header.js';

buildPage();

function buildPage() {
  header();
}

function header() {
  const headerElement = document.querySelector('.header');
  headerElement.innerHTML = Header();
}
