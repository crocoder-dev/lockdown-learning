const person = {
  name: 'David',
  surname: 'Abram',
  age: 30,
}

const first = 'John';
const last = 'Smith';

export function sayHello(name) {
  return name ? `Hello, my name is ${name}.` : 'Hello World';
}

export {
  first,
  last,
};

export default person;