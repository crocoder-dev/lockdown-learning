/* const person = {
  name: 'David',
  surname: 'Abram',
  age: 30,
  greet: () => {
    return `${person.name}`;
  }
};

const person1 = {
  name: 'John',
  surname: 'Smith',
  age: 35,  
}

function greet(person) {
  return `${person.name} says hello.`;
}

console.log(person.greet(), greet(person), greet(person1));*/

class Person {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  greet() {
    return `${this.name} says hello. I'm ${this.age}.`;
  }
}

class Coder extends Person {

  constructor(name, surname, age, favoriteLang) {
    super(name, surname, age);
    this.favoriteLang = favoriteLang;
  }

  sayLang() {
    return `My favorite lang is ${this.favoriteLang}`;
  }

}

const david = new Coder('David', 'Abram', 30, 'JavaScript');

const john = new Person('John', 'Smith', 35);

console.log(david.greet(), david.sayLang(), john.greet());
