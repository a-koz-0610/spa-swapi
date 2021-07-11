export default function Images(images) {
  console.log(images);
  const items = images.collection.items;
  console.log(items);

  return `
    <h1>This is pulled from the NASA API</h1>
    <p>What is being pulled in is a collection of items and as you dive into the api... each item has a collection of links with attached images...I am pulling in all the images associated with the first link in each item at links[0] position.</p>
    ${items
      .map((item) => {
        console.log(item.links);
        const itemImage = item.links[0].href;
        return `
          <img src=${itemImage} alt='' />
          `;
      })
      .join('')}
    `;
}
