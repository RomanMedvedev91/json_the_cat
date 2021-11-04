const request = require("request");
const arg = process.argv.slice(2)[0];
console.log(arg);
request(`https://api.thecatapi.com/v1/breeds/search?q=${arg}`, (err, response, body) => {
  if (err) return console.log("error: ", err);
  const data = JSON.parse(body);
  if (!data[0]) return console.log("error: Breed not found");
  console.log(data[0].description);
});