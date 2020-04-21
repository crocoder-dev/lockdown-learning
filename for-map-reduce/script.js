const pizzas = [
  {
    name: 'Calzone',
    toppings: ['Tomato sauce', 'Cheese', 'Ham', 'Oregano'],
  },
  {
    name: 'Hawaiian',
    toppings: ['Tomato sauce', 'Cheese', 'Pineapple'],
  },
  {
    name: 'Frutti di mare',
    toppings: ['Tomato sauce', 'shellfish', 'squid', 'clams', 'scampi'],
  },
  {
    name: 'Margherita',
    toppings: ['Tomato sauce', 'Mozzarella', 'Basil'],
  },
];

const comments = [
  {
    text: 'I love pizza',
    rating: 5,
  },
  {
    text: 'Why pineapple?',
    rating: 2,
  },
  {
    text: 'I am very dissapointed with your lack of sushi pizza.',
    rating: 3,
  },
  {
    text: 'Hey Alexa, how many pizzas can we fit in a Tesla?',
    rating: 5,
  },
  {
    text: 'Pizza was cold.',
    rating: 1,
  },
];

console.log(pizzas[1], pizzas[3].name);

function logPizzaName(pizza) {
  console.log(pizza.name);
};

pizzas.forEach(logPizzaName);

pizzas.forEach(function (pizza) {
  console.log(pizza);
});

function logEverything(pizza, index, originalArray) {
  console.log(pizza.name);
  if (originalArray.length > index + 1 ) {
    console.log(`Next pizza is ${originalArray[index + 1].name}.`);
  } else {
    console.log('This is the last pizza.');
  }
}

pizzas.forEach(logEverything);

function getPizzaName(pizza) {
  return pizza.name;
}

const pizzaNames = pizzas.map(getPizzaName);

const names = pizzas.map(function (pizza, index, originalArray) {
  return `${index} Pizza ${pizza.name}`;
});

console.log(pizzaNames, names);

function hasCheese(pizza) {
  return pizza.toppings.includes('Cheese');
}

const pizzasWithCheese = pizzas.filter(hasCheese).map(getPizzaName);

console.log(pizzasWithCheese);


const values = [10, 20, 30, 40];

// Okay

let total = 0;
values.forEach(function (value) {
  total = total + value;
});

console.log(total);

// Best

total = values.reduce(function (total, value) {
  return total + value;
}, 0);

console.log(total);

const averageRating = comments.reduce(function (total, value, index, array) {
  return total + value.rating / array.length;
}, 0);

console.log(averageRating);

const bestRated = comments.reduce(function (total, value, index, array) {
  if(total && value.rating > total.rating) {
    return value;
  } else {
    return total;
  }
});

console.log(bestRated);

function getNumberOfToppings(pizza) {
  return pizza.toppings.length;
}

function calculateAverageToppings(total, number, index, array) {
  return total + number / array.length;
}

const averageToppings = pizzas.map(getNumberOfToppings).reduce(calculateAverageToppings);
console.log(averageToppings);

const averageToppingsOnCheesePizzas = pizzas.filter(hasCheese).map(getNumberOfToppings).reduce(calculateAverageToppings);

console.log(averageToppingsOnCheesePizzas);
