//Assertion function
const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
};


//FindKey function
const findKey = (obj, callBack) => {
  //store object key in a variable
  const keys = Object.keys(obj);
  //loops through keys in object
  for (let key of keys) {
    //if the callback function returns true with the value of the 'key'
    //this is looping for, return the name of the key
    if (callBack(obj[key])) {
      return key;
    }
  }
  return undefined;
};

//Test cases :

const test = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);

console.log(test); // => noma


assertEqual(findKey({
  "apple" : {num : 4 },
  "banana" : {num : 5 }
}, x => x.num === 5), 'banana');  // => Assertion passed!