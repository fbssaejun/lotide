const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');;

describe("#findKeyByValue", () => {
  it("should return the key of the input value from the source object", () => {
    assert.deepEqual(findKeyByValue({a: 1, b: 2, c: 3}, 3), 'c');
  });

  it("should return undefined if no values match the input object's key's values", () => {
    assert.equal(findKeyByValue({a: 1, b: 2, c: 3}, 5), undefined);
  });
});

