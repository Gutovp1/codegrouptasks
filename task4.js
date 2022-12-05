const apikey = "0810b7a8b6ac4eb5bf6e267fda1141cd";
const baseURL = "https://gateway.marvel.com/v1/public/characters";
let heroes = [];

function listHeroes() {
  const tb = document.querySelector(".tbody");
  let lines = heroes.map((hero) => {
    let tr = document.createElement("tr");
    let tdId = document.createElement("td");
    let tdName = document.createElement("td");
    tdId.textContent = hero.id;
    tdName.textContent = hero.name;
    tr.appendChild(tdId);
    tr.appendChild(tdName);
    // let tdDesc = document.createElement("td");
    // tdDesc.textContent = hero.description;
    // tr.appendChild(tdDesc);
    return tr;
  });
  tb.append(...lines);
}

function getHeroes() {
  axios
    .get(baseURL, {
      params: { apikey },
    })
    .then((response) => {
      // console.log(response);
      heroes = response.data.data.results;
      listHeroes();
    })
    .catch((err) => {
      console.log(err);
    });
}
