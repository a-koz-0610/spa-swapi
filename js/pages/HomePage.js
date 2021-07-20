import ContactForm from '../components/ContactForm';
import Button from '../components/Button';

export default function HomePage() {
  return `
    <div class='homePage__container'>
      <h1>The Home Page</h1>
      <h3>Here is information on the home page of the app</h3>
      ${ContactForm()}
      ${Button()}
    </div>
    `;
}
