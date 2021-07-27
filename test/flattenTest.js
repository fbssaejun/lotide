const assert = require('chai').assert;
const flatten = require('../flatten');

describe('#flateen', () => {
  it("should return a single array with all the elements in source array when source array contains a nested array", () => {
    assert.deepEqual(flatten([1,2,[3,4],5]), [1,2,3,4,5])
  });

  it("should return single array with all the elements in source array when source array contains multiple nested arrays", () => {
    assert.deepEqual(flatten([1,2,[3,4],5,[6,7],[8]]), [1,2,3,4,5,6,7,8])
  });

  it("should return empty array if array is empty", () => {
    assert.deepEqual(flatten([]), [])
  });


})