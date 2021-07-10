import Header from './components/Header.js';
import Footer from './components/Footer.js';

buildPage();

function buildPage() {
  header();
  footer();
}

function header() {
  const headerElement = document.querySelector('.header');
  headerElement.innerHTML = Header();
}

function footer() {
  const footerElement = document.querySelector('.footer');
  footerElement.innerHTML = Footer();
}
