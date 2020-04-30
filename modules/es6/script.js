import david, { sayHello, last as surname, first as name } from './utils.js';
import worst, * as food from './food.js';

console.log(sayHello('David'));
console.log(david, name, surname);
console.log(food, food.default);
console.log(food.favorite, food.eatFood('pasta'), worst);