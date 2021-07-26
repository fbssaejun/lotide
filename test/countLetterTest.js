const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  it("should return an object with numbers of each alphabet in the sentence", () => {
    assert.deepEqual(countLetters("Hello Howdy"), { H: 2, e: 1, l: 2, o: 2, w: 1, d: 1, y: 1 });
  });

  it("should return the right number of alphabet repeated in the sentence if there's more than one", () => {
    assert.equal(countLetters("abca").a, 2);
  });
});


