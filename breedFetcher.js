const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, response, body) => {
    const data = JSON.parse(body);
    let description;
    if (!data[0]) {
      err = 'invalid breed';
      description = null;
    } else {
      description = data[0].description;
    }
    callback(err, description);
  });
};

module.exports = { fetchBreedDescription };