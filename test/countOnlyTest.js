const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("#countOnly", () => {
  it("should return number of the word repeated in the array correctly according to the object's requirements", () => {
    assert.deepEqual(countOnly(['a','b','c','a'], {'a': true}), {'a': 2})
  });

  it("should return empty object if there are no element matching in the source array", () => {
    assert.deepEqual(countOnly(['a','b','c','a'], {'f': true}), {})
  });
})

