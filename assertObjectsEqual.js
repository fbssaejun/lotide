const eqObjects = require('./eqObjects');


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  eqObjects(actual, expected) ? console.log(`✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`) : console.log(`🛑Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};

module.exports = assertObjectsEqual;

assertObjectsEqual({a : 1}, {a : 1}); // Pass
assertObjectsEqual({a : 1}, {a : 2}); // Fail
assertObjectsEqual({a : 1, b : [ 1 , 2 ]}, {a : 1, b : [ 1 , 2 ]});
assertObjectsEqual({ a: '1', b: 2 } , { b: 2, a: '1' });
