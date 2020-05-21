let id = 2;

let pets = [
  {
    id: 1,
    ownerId: 1,
    name: 'Thor',
    species: 'Cat'
  },
  {
    id: 2,
    ownerId: 1,
    name: 'Rea',
    species: 'Cat'
  }
];

const readPets = () => {
  return pets;
}

const readPetByOwnerId = (ownerId) => {
  return pets.filter(pet => pet.ownerId === ownerId);
}

const readPetById = (id) => {
  return pets.find(pet => pet.id === id);
}

const deletePetById = (id) => {
  pets = pets.filter(pet => pet.id !== id);
}

const createPet = (name, species, ownerId) => {
  const newPet = {
    id: ++id,
    name,
    species,
    ownerId,
  }
  pets.push(newPet);
  return newPet;
}

const createPets = (newPets) => {
  return newPets.map(newPet => createPet(newPet));
};

const updatePet = (id, name, species, ownerId) => {
  const pet = pets.find(pet => pet.id === id);

  pet.name = name ? name : pet.name;
  pet.species = species ? species : pet.species;
  pet.ownerId = ownerId ? ownerId : pet.ownerId;

  return pet;
}

module.exports = {
  readPets,
  readPetById,
  deletePetById,
  createPet,
  createPets,
  updatePet,
  readPetByOwnerId,
};