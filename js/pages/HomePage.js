import ContactForm from '../components/ContactForm';

export default function HomePage() {
  return `
    <h1>The Home Page</h1>
    <h3>Here is information on the home page of the app</h3>
    ${ContactForm()}
    `;
}
