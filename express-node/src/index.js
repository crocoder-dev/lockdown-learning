const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})
 
const upload = multer({ storage: storage })


const app = express();

app.use(bodyParser.json());

app.use(express.static('public'));

app.post('/upload', upload.single('image'), (req, res) => {
  res.send('Uploaded!');
});

app.get('/', (req, res) => {
  console.log('Hello!')
  res.send('GET request to homepage');
});

app.get('/users', (req, res) => {
  res.send([
    {
      name: 'David',
      surname: 'Abram',
    }
  ]);
});

app.get('/users/:id', (req, res) => {
  res.send({
    id: req.params.id,
    name: 'David',
    surname: 'Abram',
    query: req.query,
  })
});

app.all('/get-*', (req, res) => {
  res.send(`This is ${req.url} and is called by ${req.method}`);
});

app.post('/users', (req, res) => {
  res.send({ number: Number(req.body.a) * Number(req.body.b)});
});

app.get('/*', (req, res) => {
  res.send('Nothing here');
});

app.listen(3000, () => {
  console.log('Hello, my server has started!')
});


