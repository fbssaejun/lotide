const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual')
//TEST CASE:
console.log(middle([1])) // => returns []
console.log(middle([1,2,3])) // => returns [2]
console.log(middle([2,3,4,5,6,7]))  // => returns [4,5]
assertArraysEqual(middle([1,2,3,4,5]), [3]) // => returns ✅Assertion Passed: 3 === 3}