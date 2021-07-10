import Films from '../components/Films.js';

export default function FilmsPage(films) {
  return `
    <h1>The Films Page</h1>
    ${Films(films)}
    `;
}
