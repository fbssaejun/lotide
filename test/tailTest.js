const assert = require('chai').assert;
const tail = require('../tail');


describe('#tail', ()=> {
  it("should return array except the first element", () => {
    assert.deepEqual(tail([1,2,3,4,5]), [2,3,4,5]);
  });

  it("should return an empty array if passed in an array with one element", () => {
    assert.deepEqual(tail([1]), []);
  });
  
  it("should return -1 of the total length of input array", () => {
    assert.deepEqual(tail([1,2,3]).length, 2);
  });

  it("should return second element of the input array as the first element of the output array", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"])[0], 'Lighthouse');
  });

});

