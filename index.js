var animal = 'dog'

function myAnimal() {
  return animal; window.myAnimal() === 'dog'
}

var newanimal = 'cat'
function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return newanimal; window.yourAnimal() === 'cat'
}

var n = '2'

function add2(n) {
  return n + 2; window.add2() === '2'

  // Feel free to move things around!
  const two = Math
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want this to return a function that returns "FUNKY!" -- how can we accomplish that?
var theFunk = funkyFunction()()
