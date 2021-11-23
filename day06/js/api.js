const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

function getPokemon(name) {
  return fetch(baseUrl + name).then(data => data.json())
}

getPokemon('mew')
.then(data => {return data.sprites})
.then(data => data.front_default)
.then(data => {
    const img = document.createElement('img');
    img.src = data;
    img.width = '500';
    document.body.appendChild(img);
});