const { readPets, readPetByOwnerId } = require('./pet');

let id = 2;

let people = [
  {
    id: 1,
    name: 'David',
    surname: 'Abram',
    age: 30,
  },
  {
    id: 2,
    name: 'John',
    surname: 'Smith',
    age: 35,
  }
];

const readPeople = () => {
  const pets = readPets();
  return people.map(person => ({ ...person, pets: pets.filter(pet => pet.ownerId === person.id)}));
}

const readPersonById = (id) => {
  return { ...people.find(person => person.id === id), pets: readPetByOwnerId(id) };
}

const deletePersonById = (id) => {
  const pets = readPetByOwnerId(id);
  pets.forEach(pet => pet.ownerId = null);
  people = people.filter(person => person.id !== id);
}

const createPerson = (name, surname, age) => {
  const newPerson = {
    id: ++id,
    name,
    surname,
    age,
  }
  people.push(newPerson);
  return newPerson;
}

const createPeople = (newPeople) => {
  return newPeople.map(newPerson => createPerson(newPerson));
};

const updatePerson = (id, name, surname, age) => {
  const person = people.find(person => person.id === id);

  person.name = name ? name : person.name;
  person.surname = surname ? surname : person.surname;
  person.age = age ? age : person.age;

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