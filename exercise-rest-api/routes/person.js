const { readPets, readPetByOwnerId, createUpdatePets } = require('./pet');
const db = require('../db');


const readPeople = () => {
  const pets = readPets();
  return db.read().people.value.map(person => ({ ...person, pets: pets.filter(pet => pet.ownerId === person.id)}));
}

const readPersonById = (id) => {
  return { ...db.read().people.value.find(person => person.id === id), pets: readPetByOwnerId(id) };
}

const deletePersonById = (id) => {
  const data = db.read();
  const pets = readPetByOwnerId(id, data);
  pets.forEach(pet => pet.ownerId = null);
  data.people.value = data.people.value.filter(person => person.id !== id);
  db.save(data);
}


const createPerson = (name, surname, age, pets = []) => {
  const data = db.read();
  const newPerson = {
    id: ++data.people.id,
    name,
    surname,
    age,
  }

  data.people.value.push(newPerson);

  db.save(data);


  newPerson.pets = createUpdatePets(pets, newPerson.id);

  return newPerson;
}

const createPeople = (newPeople) => {
  return newPeople.map(newPerson => createPerson(newPerson.name, newPerson.surname, newPerson.age));
};

const updatePerson = (id, name, surname, age, pets = []) => {
  const data = db.read();
  const person = data.people.value.find(person => person.id === id);

  person.name = name ? name : person.name;
  person.surname = surname ? surname : person.surname;
  person.age = age ? age : person.age;

  person.pets = createUpdatePets(pets, id);


  db.save(data);
  return person;
}

module.exports = {
  readPeople,
  readPersonById,
  deletePersonById,
  createPerson,
  createPeople,
  updatePerson,
};
