//Assertion Function
const eqArrays = (firstArr, secondArr) => {
  if (firstArr.length === secondArr.length) {
    for (let i = 0; i < firstArr.length; i++) {
      if (firstArr[i] !== secondArr[i]) {
        return false;
      }
    }
    return true;
  }
};


const assertArraysEqual = (actual, expected) => {
  eqArrays(actual, expected) ? console.log(`✅Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
};


//Takeuntil Function
const takeUntil = (array, callback) => {
  let resultArr = [];
  for (let items of array) {
    if (!callback(items)) {
      resultArr.push(items);
    } else {
      return resultArr;
    }
  }
  return resultArr;
};

//Test cases :
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


assertArraysEqual(takeUntil([1,2,3,4], x => x === 4), [1,2,3]);
assertArraysEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [1,2,5,7,2]);