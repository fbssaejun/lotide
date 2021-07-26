const assertArraysEqual = require('../assertArraysEqual')

assertArraysEqual([1,2,3],[1,2,3]) // => Pass
assertArraysEqual([1,2,3],[1,3]) // => Fail