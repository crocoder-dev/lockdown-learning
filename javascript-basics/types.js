// string

var name = 'David';
name = "John";
name = `Jack`;

var songName = "I'm so \"fancy\"";
songName = 'I\'m so "fancy"';

var lyrics = `
  I'm so fancy, you already know
  I'm in the fast lane from L.A. to Tokyo
`;

console.log(`Hello, ${name}`);

// number

var age = 30;

const a = 2;
const b = 3;

a + b;
a * b;
b - a;
b / a;

Math.round(b / a);

Math.log10(a);

Math.random();

const oranges = 35;
const people = 6;

console.log(Math.floor(oranges / people));

10 * 200 // To Infinity

typeof 10 * 200;


10 / 'David' // NaN

typeof NaN // Still a number

// object

const person  = {
  name: 'David',
  surname: 'Abram',
  age: 30,
};

const newPerson = {
  name,
}

// null & undefined

var somethingUndefined;

var somethingNull = null;

// boolean

var isDavidSpeaking = true;

var isAdult = person.age > 18;

console.log(isAdult);

console.log(person.age === 35);