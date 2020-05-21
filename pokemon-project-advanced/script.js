import { colors } from './data';
import { createPokemon, deletePokemon } from './fetch';

const getBackground = (type) => type.length === 2 ? `linear-gradient(0.625turn, ${colors[type[0]]} 50%, ${colors[type[1]]} 50% 100%)` : colors[type[0]]

const wrapperElement = document.querySelector('#app > .wrapper')
const searchBoxElement = document.querySelector('#app > .search-box')

const pokemonElementList = [];

const filterPokemonList = async (text) => {
  
  const response = await fetch(`http://localhost:3000/pokemon?q=${text}`);

  const foundPokemon = await response.json();

  const foundPokemonIds = foundPokemon.map(pokemon => pokemon.id);
  const filteredByName = pokemonElementList.filter(p => foundPokemonIds.includes(Number(p.id)));

  filteredByName.forEach(p => p.style.display = '');
  pokemonElementList.filter(p => !filteredByName.includes(p)).forEach(p => p.style.display = 'none');
}


const initSearchBox = () => {
  const searchTextElement = document.querySelector('.search-text');
  searchTextElement.onkeyup = (event) => filterPokemonList(event.target.value);
}

const createPokemonList = async () => {

  const response = await fetch('http://localhost:3000/pokemon');

  const pokemon = await response.json();

  pokemon.forEach((p, i) => {
    const pokemonElement = document.createElement('div');
    pokemonElement.classList.add('pokemon');
    pokemonElement.style.background = getBackground(p.type);
  
    const pokemonImageElement = document.createElement('img');
    
    pokemonImageElement.src = `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/thumbnails/${p.id.toString().padStart(3, 0)}.png`;
    
    pokemonImageElement.id = p.name.english;
    
    const pokemonNameElement = document.createElement('span');
    pokemonNameElement.textContent = p.name.english;
  
    pokemonElement.id = p.id;
    pokemonElement.dataset.id = i;
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

// 1. Create a form for new pokemon creation

/*createPokemon({
  name: {
    english: "Bulbclone",
    japanese: "フシギダネ",
    chinese: "妙蛙种子",
    french: "Le Bulbclone?"
  },
  type: [
    "Grass",
    "Poison"
  ],
  base: {
    HP: 45,
    Attack: 49,
    Defense: 49,
    "Sp. Attack": 65,
    "Sp. Defense": 65,
    Speed: 45
  }
});*/

// 2. Delete pokemon on click

//   deletePokemon(5);

// 3. On every deletion or creation of a pokemon, you should update the data.