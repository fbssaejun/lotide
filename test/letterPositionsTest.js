const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("should return an object with array containing each alphabet's index from the input", () => {
    assert.deepEqual(letterPositions("Hello"), {'H':[0], 'e':[1], 'l':[2,3], 'o':[4]});
  });

  it("should return the right array index of the alphabet one's trying to access", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });
});




//Test Case:
// console.log(letterPositions("hello howdy"));
// assertArraysEqual(letterPositions("hello").e, [1]);