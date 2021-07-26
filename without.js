const eqArrays = require('./eqArrays')
const assertArrayEqual = require('./assertArraysEqual')

//Returns array without the element specified if contained in source array
const without = (source, itemsToRemove) => {
  let result = []
  if(eqArrays(source, itemsToRemove)) {
    return "There's nothing that you like!"
  }
  for(let i = 0; i < source.length; i++) {
    if(!itemsToRemove.includes(source[i])) {
      result.push(source[i])
    }
  }
  return result;
};

module.exports = without;

//Test statements
console.log(without([1,2,3],[1,2,3]))// => There's nothing that you like!
console.log(without([1, 2, 3], [1]))// => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

assertArrayEqual(["hello", "world", "lighthouse"], ["hello", "world", "lighthouse"]);
