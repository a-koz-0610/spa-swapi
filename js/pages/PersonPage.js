import PersonTile from '../components/PersonTile.js';

export default function PersonPage(person) {
  return `
    <h1>The Person Page</h1>
    ${PersonTile(person)}
    `;
}
