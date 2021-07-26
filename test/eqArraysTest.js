const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1,4,5], [1,3,4]), false)
assertEqual(eqArrays([1,4,5,6], [1,4,5,6]), true)
