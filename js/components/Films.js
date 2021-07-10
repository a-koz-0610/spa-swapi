export default function Films(films) {
  return `
    <ul>
    ${films.results
      .map((film) => {
        return `
        <h3>${film.title}</h3>
        `;
      })
      .join('')}
    </ul>
    `;
}
