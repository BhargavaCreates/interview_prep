// let and const are hoisted, but are present in the temporal dead zone until they are not assigned
// with a value. so unlike var declaration they can not be accessed before initialization.

// ex.

// console.log(a); // o/p : ReferenceError: Cannot access 'a' before initialization.
// console.log(b); // same as a .
// console.log(c); // o/p: undefined. because c was hoisted and was attached to the global object.

// let a = 10;
// const b = 20;
// var c = 50;

// BLOCK SCOPE
// let and const are block scoped.

{
  // THIS IS A BLOCK: defined by {} .. aka compound statement: group of multiple statements.
  // they are defined to be put in place where js needs a single statement.
  // for example if(condition) <statement>, while(condition) <statement>
}

{
  var a = 10;
  let b = 20; // checking debugger found: they are in BLOCK SCOPE (let)
  const c = 30; // checking debugger found: they are in BLOCK SCOPE (const)
  console.log(a); // 10
  console.log(b); // 20
  console.log(c); // 30
}

console.log(a); // 10 -- got printed even outside scope because a was declared with var -- which got it attached  to the global object.
console.log(b); // error: b not defined -- since b was declared with let and let is block scoped.
console.log(c); // error: same as above

// SHADOWING -- when we have same named variable declared using `var` both inside and outside of a block,
// the outside declared variable gets shadowed by the inside variable.

// ex

var a = 100;
{
  var a = 10;
}

console.log(a); // o/p : 10. because a initially on line no 41 .. gets attached to the global scope and initialized with 100 and upon entring the block the value gets updated with the new value.

// in case on `let` -- shadowing occurs but is only limited to the block scope since let is block scoped.

let b = 20;
{
  let b = 100;
  console.log(b); // o/p: 100
}
console.log(b); // o/p: 20

// Illegal Shadowing -- when we change the type but keep the same variable name ex:..

let a = 10;
{
  var a = 100; // o/p: Error a already defined -- Illegal Shadowing.
}
