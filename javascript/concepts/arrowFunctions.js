// 2. Difference between arrow function and regular functions is that
//      i. arrow function does'nt have its binding to either super or this. th
//      ii. arrow functions do not have this, arguments object, new.target and prototype , they are lexical means have access to this of their enclosing scope.

function sayHello() {
  console.log(this.name);
}

let sayHelloArrow = () => {
  console.log(this.name);
};

let obj = {
  name: 'Aman',
  age: '23',
  sayHello,
  sayHelloArrow,
};

obj.sayHello(); // o/p: Aman
obj.sayHelloArrow(); // o/p: undefined as arrow functions do not have access to this keyword.

// ii. no arguments, new.target and prototype.

let sum = () => {
  console.log(arguments[0]);
};

sum(2, 3, 5);

// Arrow functions do not have prototype property.
console.log(
  sayHelloArrow.hasOwnProperty('prototype'), // false
  sayHello.hasOwnProperty('prototype') // true
);

// 3. Arrow functions are good for callback functions and closures because of their cleaner syntax.

// WHEN NOT TO USE ARROW FUNCTIONS.
// since they do not have its own `this` value and  the `argument` object.
//  1. Event Handlers -- as it may require this 2. Object Method: as they may also require this.
//  3. If use of Function may be required.

const counter = {
  count: 0,
  next: () => ++this.count, // this.count : undefined
  current: () => this.count,
};

function Counter() {
  this.count = 0;
}

Counter.prototype.next = () => {
  return this.count; // wrong
};

Counter.prototype.current = () => {
  return ++this.next; // wrong
};
