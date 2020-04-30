function getPokemonName1(pokemon) {
  return pokemon.name.english;
}

const getPokemonName2 = (pokemon) => {
  return pokemon.name.english;
}

const getFrenchPokemonName = (pokemon) => pokemon.name.french;

const createPerson = (name, surname, age) => ({
  name,
  surname,
  age,
});

console.log(createPerson('David', 'Abram', 30));

console.log(pokemon.slice(0, 20).map(getPokemonName2));
console.log(pokemon.slice(20, 40).map(getFrenchPokemonName));
console.log(pokemon.slice(40, 60).map(p => p.name.english));

console.log(pokemon.filter(p => p.type.includes('Water')));
console.log(pokemon.some(p => p.type.includes('Water')));
console.log(pokemon.every(p => p.type.includes('Water')));

console.log(pokemon.map(p => p.type).reduce((total, value) => total < value.length ? value.length : total, 0));