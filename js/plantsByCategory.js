const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b7e21a7304msh9cbad96d4b859b2p17967cjsnaab2590c43b9",
    "X-RapidAPI-Host": "house-plants.p.rapidapi.com",
  },
};

fetch("https://house-plants.p.rapidapi.com/all", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));