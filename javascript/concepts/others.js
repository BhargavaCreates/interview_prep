// 1. To return Multiple values from a functions arrays and objects could be used.

function getDetails() {
  return {
    firstName: 'Aman',
    lastName: 'Bhargava',
    age: '23',
  };
}

// Rest Operator -- allows you to represent indefinite number of arguments as an Array

function fn(a, b, ...others) {
  console.log(a, b, others);
}

fn(1, 2, 4, 5, 5); // o/p: 1,2, [4,5,5]

function sum() {
  console.log(arguments);
}

sum(1, 33, 4, 5, 532);

// Dynamic Function
var showNumbers = new Function('...numbers', 'console.log(numbers)');
showNumbers(1, 2, 3);

// Call back hell : Nesting of multiple callbacks one inside other
