const express = require('express');
const bodyParser = require('body-parser');
const { readPeople, readPersonById, deletePersonById, createPerson, createPeople, updatePerson } = require('./routes/person');
const { readPets, readPetById, deletePetById, createPet, createPets, updatePet } = require('./routes/pet');
const app = express();

app.use(bodyParser.json());

//person

app.route('/person')
  .get((req, res) => {
    res.send(readPeople());
  })
  .post((req, res) => {
    if(Array.isArray(req.body)) {
      const result = createPeople(req.body);
      res.send(result);
    } else {
      const result = createPerson(req.body.name, req.body.surname, req.body.age);
      res.send(result);
    }
  });

app.route('/person/:id')
  .get((req, res) => {
    const result = readPersonById(Number(req.params.id));
    if(result) {
      res.send(result);
    } else {
      res.status(404).send('We lost your person!');
    }
  })
  .put((req, res) => {
    const result = updatePerson(Number(req.params.id), req.body.name, req.body.surname, req.body.age);
    res.send(result);
  })
  .delete((req, res) => {
    deletePersonById(Number(req.params.id));
    res.send(204);
  }); 


//pet

app.route('/pet')
  .get((req, res) => {
    res.send(readPets());
  })
  .post((req, res) => {
    if(Array.isArray(req.body)) {
      const result = createPets(req.body);
      res.send(result);
    } else {
      const result = createPet(req.body.name, req.body.species);
      res.send(result);
    }
  });

app.route('/pet/:id')
  .get((req, res) => {
    const result = readPetById(Number(req.params.id));
    if(result) {
      res.send(result);
    } else {
      res.status(404).send('');
    }
  })
  .put((req, res) => {
    const result = updatePet(Number(req.params.id), req.body.name, req.body.species);
    res.send(result);
  })
  .delete((req, res) => {
    deletePetById(Number(req.params.id));
    res.send(204);
  }); 

app.get('/', (req, res) => {
  res.send('Hello youtube!');
});

app.listen(8000);