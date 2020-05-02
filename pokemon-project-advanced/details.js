const urlParams = new URLSearchParams(window.location.search);
const chosenPokemon = pokemon[Number(urlParams.get('pokemon'))];

const wrapperElement = document.querySelector('#app > .details-wrapper')

const numberElement = document.createElement('div');
numberElement.classList.add('number');
numberElement.textContent = `#${chosenPokemon.id}`;

const pokemonImageElement = document.createElement('img');
pokemonImageElement.src = `./images/${chosenPokemon.id.toString().padStart(3, 0)}.png`
pokemonImageElement.id = chosenPokemon.name.english;

const nameElement = document.createElement('div');
nameElement.classList.add('name');
nameElement.textContent = chosenPokemon.name.english;

const typesElement = document.createElement('div');
typesElement.classList.add('types');

chosenPokemon.type.forEach(p => {
  const typeElement = document.createElement('span');
  typeElement.style.background = colors[p];
  typeElement.textContent = p;
  typesElement.appendChild(typeElement);
});

const createStats = (value, key) => {
  const statsElement = document.createElement('div');
  statsElement.classList.add('stats');
  statsElement.textContent = `${key}: ${value}`;
  return statsElement;
}

wrapperElement.appendChild(numberElement);
wrapperElement.appendChild(pokemonImageElement);
wrapperElement.appendChild(nameElement);
wrapperElement.appendChild(typesElement);
wrapperElement.appendChild(createStats(chosenPokemon.base.HP, 'HP'));
wrapperElement.appendChild(createStats(chosenPokemon.base.Attack, 'Attack'));
wrapperElement.appendChild(createStats(chosenPokemon.base.Defense, 'Defense'));
wrapperElement.appendChild(createStats(chosenPokemon.base['Sp. Attack'], 'Sp. Attack'));
wrapperElement.appendChild(createStats(chosenPokemon.base['Sp. Defense'], 'Sp. Defense'));
wrapperElement.appendChild(createStats(chosenPokemon.base.Speed, 'Speed'));
