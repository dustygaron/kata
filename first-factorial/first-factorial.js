// This challenge requires you to return the factorial of a given number.
// A factorial of some number N is N multiplied by(N - 1) multiplied by(N - 2)
// and so forth until you reach the number 1. For example, the factorial of 4
// is 4 * 3 * 2 * 1 = 24. The algorithm for this will be quite simple, we'll loop
// from 1 to N multiplying each number by the previous one until we reach our number.
// Note: the notation for a factorial is ! so the factorial of 4 is written 4!

// In the code below, we create a new variable called factorial which we will
// use to store our temporary values as we loop.In our loop, we start at 1 and
// increment until we reach our variable num.

// ************
//  SOLUTION 1 
// ************
function FirstFactorial(num) {
  var factorial = 1

  for (var i = 1; i <= num; i++) {
    // multiply each number between 1 and num
    // factorial = 1 * 1 = 1
    // factorial = 1 * 2 = 2
    // factorial = 2 * 3 = 6
    // factorial = 6 * 4 = 24
    // ...
    factorial = factorial * i
  }

  return factorial
}

console.log(FirstFactorial(4)) // 24

// ************
//  SOLUTION 2 
// ************
function FirstFactorial(num) {

  function factorial(n) {
    // terminate the recursion once we hit zero
    if (n === 0) { return 1 }

    // otherwise keep calling the function recursively
    else { return factorial(n - 1) * n }
  }

  return factorial(num)
}

console.log(FirstFactorial(4))
