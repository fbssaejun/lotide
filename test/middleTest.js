const assert = require('chai').assert
const middle = require('../middle');

describe("#middle", () => {
  it("should return an empty array when passed in an array with one element", () => {
    assert.deepEqual(middle([1]), [])
  });

  it("should return an array with the middle element of the input array when the length of the array is an odd number", () => {
    assert.deepEqual(middle([1,2,3]), [2])
  });

  it("should return an array of the two middle elements when the length of the input array is even", () => {
    assert.deepEqual(middle([1,2,3,4,5,6,7,8]), [4,5])
  });

  it("should return undefined when passed in an empty array", () => {
    assert.deepEqual(middle([]), undefined)
  })
})