export default function PeoplePage(people) {
  return `
    <h1>The People Page</h1>
    <div class='people__container'>
        ${people.results
          .map((person) => {
            return `
            <div class='person__tile_container'>
                <h2>${person.name}</h2>
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
          })
          .join('')}
    </div>
    `;
}
