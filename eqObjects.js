const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
};

//Checks if two arrays are identical
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
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1)
  let keys2 = Object.keys(object2)
  let conditionalCheck = true;
  if(keys1.length !== keys2.length) {
      conditionalCheck = false;
    } else {
      for(const key1 of keys1) {
        //Checks for values that are an array
        if(Array.isArray(object1[key1]) && Array.isArray(object2[key1])) {
          if (!eqArrays(object1[key1], object2[key1])) {
            conditionalCheck = false;
          } else {
            conditionalCheck = true;
          }    
        } else {
        //Checks for primitive values 
        if(object1[key1] !== object2[key1]) {
          conditionalCheck = false;
        } else {
         conditionalCheck = true;
        }
        }    
    }
  }
  return conditionalCheck;
}

//Test code :
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab,ba), true)

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab,abc), false);


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); 

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);