//Assertion function
const eqArrays = (firstArr, secondArr) => {
  if(firstArr.length === secondArr.length) {
  for(let i = 0; i < firstArr.length; i++) {
    if(firstArr[i] !== secondArr[i]) {
      return false;
    } 
   }
   return true;
  }
}

const assertArraysEqual = (actual, expected) => {
  eqArrays(actual, expected) ? console.log(`✅Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
}


//Map function
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


//Test Cases : 
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[1]);
const results3 = map(words, word => word[word.length - 1]);

assertArraysEqual(results1, ['g','c','t','m','t'])
assertArraysEqual(results2, ['r','o','o','a','o'])
assertArraysEqual(results3, ['d','l','o','r','m'])

