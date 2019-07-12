// Have the function FirstReverse(str) take the str parameter
// being passed and return the string in reversed order.
// For example: if the input string is "Hello World and Coders"
// then your program should return the string sredoC dna dlroW olleH.

// Sample Test Cases
// ****************
// Input: "coderbyte"
// Output: etybredoc
// Input: "I Love Code"
// Output: edoC evoL I
// ****************

// // solution 1
// function FirstReverse(str) {
//   return Array.from(str).reverse().join('')
// }

// console.log(FirstReverse('coderbyte'))

// solution 2
function FirstReverse(str) {
  return [...str].reverse().join('')
}

console.log(FirstReverse('coderbyte'))
