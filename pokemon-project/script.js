const wrapperElement = document.querySelector('#app > .wrapper');
const getBackground = (type) => type.length === 1 ? colors[type[0]] : `linear-gradient(225deg, ${colors[type[0]]} 50%, ${colors[type[1]]} 50%)`;

const filterPokemonList = (text) => {
  const pokemonElementArray = [...document.querySelectorAll('.pokemon')];

  const filteredByNameArray = pokemonElementArray.filter(
    (p, i) =>  pokemon[i].name.english.toLowerCase().includes(text.toLowerCase())
  );

  filteredByNameArray.forEach(p => p.style.display = '');
  pokemonElementArray.filter(p => !filteredByNameArray.includes(p)).forEach((p) => p.style.display = 'none');
}

const searchTextElement = document.querySelector('.search-text');
searchTextElement.onkeyup = event => filterPokemonList(event.target.value);


pokemon.forEach(p => {
  const pokemonElement = document.createElement('div'); // change a
  pokemonElement.classList.add('pokemon');
  pokemonElement.style.background = getBackground(p.type);
  // pokemonElement.href ./details.html?pokemon=1

  const pokemonImageElement = document.createElement('img');
  pokemonImageElement.alt = p.name.english;
  pokemonImageElement.src = `./images/${p.id.toString().padStart(3, '0')}.png`;

  const pokemonNameElement = document.createElement('span');
  pokemonNameElement.textContent = p.name.english;

  pokemonElement.appendChild(pokemonImageElement);
  pokemonElement.appendChild(pokemonNameElement);

  wrapperElement.appendChild(pokemonElement);
});