const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("should return true if both arrays are equal", () => {
    assert.deepEqual(eqArrays([1,2,3],[1,2,3]), true)
  });

  it("should return false if both arrays are NOT equal", () => {
    assert.deepEqual(eqArrays([1,2,3],[1,2,4]), false)
  });

  it("should return true if both arrays are empty", () => {
    assert.deepEqual(eqArrays([],[]), true)
  });

})
