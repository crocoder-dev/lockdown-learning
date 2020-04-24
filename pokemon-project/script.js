const getBackground = (type) => type.length === 2 ? `linear-gradient(0.625turn, ${colors[type[0]]} 50%, ${colors[type[1]]} 50% 100%)` : colors[type[0]]

const wrapperElement = document.querySelector('#app > .wrapper')
const searchBoxElement = document.querySelector('#app > .search-box')

const pokemonElementList = [];

const filterPokemonList = (text) => {
  const filteredByName = pokemonElementList.filter(
    p => pokemon[Number(p.dataset.id)].name.english.toLowerCase().includes(text.toLowerCase())
  );

  filteredByName.forEach(p => p.style.display = '');
  pokemonElementList.filter(p => !filteredByName.includes(p)).forEach(p => p.style.display = 'none');
}


const initSearchBox = () => {
  const searchTextElement = document.querySelector('.search-text');
  searchTextElement.onkeyup = (event) => filterPokemonList(event.target.value);
}

const createPokemonList = () => {
  pokemon.forEach((p, i) => {
    const pokemonElement = document.createElement('a');
    pokemonElement.classList.add('pokemon');
    pokemonElement.href = `./details.html?pokemon=${i}`;
    pokemonElement.style.background = getBackground(p.type);
  
    const pokemonImageElement = document.createElement('img');
    pokemonImageElement.src = `./images/${p.id.toString().padStart(3, 0)}.png`
    pokemonImageElement.id = p.name.english;
    
    const pokemonNameElement = document.createElement('span');
    pokemonNameElement.textContent = p.name.english;
  
    pokemonElement.appendChild(pokemonImageElement);
    pokemonElement.appendChild(pokemonNameElement);
    wrapperElement.appendChild(pokemonElement);

    pokemonElementList.push(pokemonElement);
  });
};

const init = () => {
  createPokemonList();
  initSearchBox();
};

init();



