import { ask } from './magical8ball.js';

function askCallback() {
  console.log('Before askCallback');
  ask('Should I order a pizza', (error, answer) => {
    if(error !== null) {
      console.log('callback', `Error: ${error.message}`);
    } else {
      console.log('callback', `Answer is: ${answer}`);
    }
  });
  console.log('After askCallback');
}

function askPromise() {
  console.log('Before askPromise');
  ask('Should I order a pizza')
    .then(answer => {
      console.log('promise', `Answer is: ${answer}`);
    })
    .catch(error => {
      console.log('promise', `Error: ${error.message}`);
    });

  console.log('After askPromise');
}

async function askAsync() {
  console.log('Before askAsync');
  try {
    const answer = await ask('Should I order a pizza');
    console.log('async', `Answer is: ${answer}`);
  } catch (error) {
    console.log('async', `Error: ${error.message}`);
  }

  console.log('After askAsync');
}
askCallback();
askPromise();
askAsync();

fetch('http://localhost:3000/food')
  .then(response => response.json())
  .then(data => console.log(data));

async function getFood(id)  {
  const response = id ? await fetch(`http://localhost:3000/food?id=${id}`) : await fetch('http://localhost:3000/food');
  const data = await response.json();
  console.log(data);
}

getFood();
getFood(2);


