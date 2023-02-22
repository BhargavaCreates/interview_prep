// IIFE (immediately invoked function expression) are function as expressions that are immediately invoked
// after creation.

// Why use IIFE: So whenever we define a function, it is added to the global object by the js engine.
// depending upon the environment it is either added to the window object in case of browser.
// or to the global object in the case of nodejs.
// same happens when you declare a variable with the keyword `var`: the variable gets added to the
// global object ..
// So if we decide to have a lot of variables and function's in global object, the the js engine
// would release the memory only after global object looses its scope causing `memory inefficiencies` and name collisions.

// syntax
(function () {
  // code here
})();

let sum = (function (a, b) {
  return a + b;
})(10, 20);

console.log(sum);

// By placing variables and functions inside a iife, we can avoid polluting them in global object.

// there can be named iife's

(function namedIife() {})();

// there could start with ;, to terminate the the statement incase 2 present

// ;(function () {

// })();
