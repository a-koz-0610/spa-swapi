export default function PersonTile(person) {
  return `
    <div class='person__tile_container'>
          <input type='hidden' id='personId' value=${person.url} />
          <h2 class='person__name'>${person.name}</h2>
          <p>Hair Color: ${person.hair_color}</p>
          <p>Birth Year: ${person.birth_year}</p>
          <h3>Films:</h3>
          ${person.films
            .map((film) => {
              return `
                  <p>${film}</p>
              `;
            })
            .join('')}
      </div>
    `;
}
