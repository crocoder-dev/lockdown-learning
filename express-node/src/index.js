const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json());

app.get('/', (req, res) => {
   res.send('Hello World');
});

app.post('/', (req, res) => {
  res.send('You have just POSTed in the wrong neighbourhood.')
});

app.all('/get-*', (req, res) => {
  res.send(`url is ${req.url} and method called is ${req.method}`);
});

app.get('/users/:userId/pets/:petId', (req, res) => {
  res.send(req.params);
});

app.post('/users', (req, res) => {
  console.log(req.body.a)
  res.send(req.body);
});

/*
fetch('http://localhost:8000/users', { method: 'POST', headers: { 'Content-Type': 'application/json'}, body: JSON.stringify({a : 3}))
  .then(response => response.text()})
  .then(data => console.log(data));
*/

/*fetch('http://localhost:8000/users', { method: 'POST', headers: { 'Content-Type': 'application/json'}, body: JSON.stringify({a : 3}) })
  .then(response => response.text())
  .then(data => console.log(data));*/

app.listen(8000, () => {
   console.log(`App running at http://localhost:8000`);
});