const db = require('../db');


const readPets = () => {
  return db.read().pets.value;
}

const readPetById = (id) => {
  return db.read().pets.value.find(pet => pet.id === id);
}


const readPetByOwnerId = (ownerId, data = null) => {
  if (data) {
    return data.pets.value.filter(pet => pet.ownerId === ownerId);
  } else {
    return db.read().pets.value.filter(pet => pet.ownerId === ownerId);
  }
}

const deletePetById = (id) => {
  const data = db.read();
  data.pets.value = data.pets.value.filter(pet => pet.id !== id);
  db.save(data);
}

const createPet = (name, species, ownerId) => {
  const data = db.read();

  const newPet = {
    id: ++data.pets.id,
    name,
    species,
    ownerId,
  }
  data.pets.value.push(newPet);
  db.save(data);
  return newPet;
}

const createPets = (newPets) => {
  return newPets.map(newPet => createPet(newPet.name, newPet.species, newPet.ownerId));
};

const updatePet = (id, name, species, ownerId) => {
  const data = db.read();
  const pet = data.pets.value.find(pet => pet.id === id);

  pet.name = name ? name : pet.name;
  pet.species = species ? species : pet.species;
  pet.ownerId = ownerId ? ownerId : pet.ownerId;

  db.save(data);
  return pet;
}


const createUpdatePets = (pets, id)  => {
  const petsToCreate = pets.filter(pet => Number.isNaN(Number(pet))).map(pet => ({ ...pet, ownerId: id }));
  const newPets = createPets(petsToCreate);

  const petsToUpdate = pets.filter(pet => !Number.isNaN(Number(pet)));
  const updatedPets = petsToUpdate.map(pet => updatePet(pet, undefined, undefined, id));

  return [
    ...newPets,
    updatedPets,
  ]
}

module.exports = {
  readPets,
  readPetById,
  deletePetById,
  createPet,
  createPets,
  updatePet,
  readPetByOwnerId,
  createUpdatePets,
};