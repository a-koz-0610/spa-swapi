import PersonTile from './PersonTile';

export default function People(people) {
  return `
  <div class='people__container'>
  ${people.results
    .map((person) => {
      return `
      ${PersonTile(pesron)}
      `;
    })
    .join('')}
</div>
    `;
}