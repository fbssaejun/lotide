const assertEqual = require('./assertEqual')


const findKeyByValue = (obj, value) => {
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (obj[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;


//Test Case:
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); // => Assertion Passed: drama === drama
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); // => Assertion Passed: undefined === undefined
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy"); // => Assertion Passed: comedy === comedy

