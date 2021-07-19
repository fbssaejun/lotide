const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
};

const tail = function(arr) {
  let result = [];
  for (let i = 1; i < arr.length; i++) {
    result.push(arr[i]);
  }
  return result;
};

console.log(tail([1,2,3,4,5])); // Prints : [ 2, 3, 4, 5 ]
console.log(tail([1])); // Prints : []
console.log(assertEqual(tail([1,2,3]).length, 2));  // Prtins : Assertion Passed: 2 === 2


const words = ["Hello", "Lighthouse", "Labs"];
assertEqual(tail(words)[0], 'Lighthouse'); //  Prints : ✅Assertion Passed: Lighthouse === Lighthouse