//Write a function called rupee which returns an object on which
//I can set crores, lakhs, thousands etc and then finally get the value.

function rupee() {
  let amount = 0;

  let functions = {
    crores: crores,
    value: value,
    lakhs: lakhs,
    thousands: thousands,
    hundreds: hundreds,
    tens: tens,
    ones: ones,
  };

  function crores(x) {
    amount += x * 10000000;
    return functions;
  }

  function lakhs(x) {
    amount += x * 100000;
    return functions;
  }

  function thousands(x) {
    amount += x * 1000;
    return functions;
  }

  function hundreds(x) {
    amount += x * 100;
    return functions;
  }

  function tens(x) {
    amount += x * 10;
    return functions;
  }

  function ones(x) {
    amount += x;
    return functions;
  }

  function value() {
    return amount;
  }

  return functions;
}

var r = rupee()
  .crores(10)
  .lakhs(5)
  .thousands(23)
  .hundreds(5)
  .tens(2)
  .ones(2)
  .value();
var r1 = rupee()
  .crores(1)
  .lakhs(5)
  .thousands(23)
  .hundreds(5)
  .tens(2)
  .ones(2)
  .value();
console.log(r, r1);
//100523522

// console.log(rupee().crores(1).crores(1).lakhs(1).value())
