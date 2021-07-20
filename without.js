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

const assertArrayEqual = (actual, expected) => {
  eqArrays(actual, expected) ? console.log(`✅Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
}

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
  return result
}



//Test statements
console.log(without([1,2,3],[1,2,3]))// => There's nothing that you like!
console.log(without([1, 2, 3], [1]))// => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
assertArrayEqual(words, ["hello", "world", "lighthouse"]);
