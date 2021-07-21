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



const middle = (array) => {
  const midIndex = Math.floor(array.length/2);
  const middleArray = [];
  if(array.length <= 2) {
    return []
  } else if (array.length % 2 !== 0) {
     middleArray.push(array[midIndex])
  } else {
     middleArray.push(array[midIndex - 1], array[midIndex])
  }
  return middleArray
}

console.log(middle([1])) // => returns []
console.log(middle([1,2,3])) // => returns [2]
console.log(middle([2,3,4,5,6,7]))  // => returns [4,5]
assertArrayEqual(middle([1,2,3,4,5]), [3]) // => returns ✅Assertion Passed: 3 === 3}