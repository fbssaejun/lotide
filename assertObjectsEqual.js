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

const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  let conditionalCheck = true;
  if (keys1.length !== keys2.length) {
    conditionalCheck = false;
  } else {
    for (const key1 of keys1) {
      //Checks for values that are an array
      if (Array.isArray(object1[key1]) && Array.isArray(object2[key1])) {
        if (!eqArrays(object1[key1], object2[key1])) {
          conditionalCheck = false;
        } else {
          conditionalCheck = true;
        }
      } else {
        //Checks for primitive values
        if (object1[key1] !== object2[key1]) {
          conditionalCheck = false;
        } else {
          conditionalCheck = true;
        }
      }
    }
  }
  return conditionalCheck;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  eqObjects(actual, expected) ? console.log(`✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) : console.log(`🛑Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};


assertObjectsEqual({a : 1}, {a : 1});
assertObjectsEqual({a : 1}, {a : 2});
assertObjectsEqual({a : 1, b : [ 1 , 2 ]}, {a : 1, b : [ 1 , 2 ]});
assertObjectsEqual({ a: '1', b: 2 } , { b: 2, a: '1' });
