const colors = {
  Grass: '#78C850',
  Poison: '#A040A0',
  Fire: '#F08030',
  Flying: '#A890F0',
  Water: '#6890F0',
  Bug: '#A8B820',
  Normal: '#A8A878',
  Electric: '#F8D030',
  Ground: '#E0C068',
  Fairy: '#EE99AC',
  Fighting: '#C03028',
  Psychic: '#F85888',
  Rock: '#B8A038',
  Ice: '#E0C068',
  Dragon: '#7038F8',
  Dark: '#705848',
  Steel: '#B8B8D0',
  Ghost: '#705898',
};

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
    const pokemonElement = document.createElement('div');
    pokemonElement.classList.add('pokemon');
    pokemonElement.dataset.id = i;
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



