function getRequest(location, callback) {
  fetch(location)
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((err) => console.log(err));
}

function getSmithsonianRequest(location, callback) {
  fetch(location, {
    headers: {
      api_key: 'XTho1qNbbH712lzHCbhJ9lArgnclHEw7otZfuXx7',
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((err) => console.log(err));
}

export default {
  getRequest,
  getSmithsonianRequest,
};
