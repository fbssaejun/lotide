const assert = require('chai').assert;
const eqObjects = require('../eqObjects');;

describe("#eqObjects", () => {
  it("should return true if two objects are identical", () => {
    assert.equal(eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" }), true);
  });

  it("should return false if two objects are NOT identical", () => {
    assert.equal(eqObjects({ a: "1", b: "2" }, { a: "1", b: "100" }), false);
  });
});
