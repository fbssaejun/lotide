# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @fbssaejun/lotide`

**Require it:**

`const _ = require('@fbssaejun/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: returns the first element from the input array.
* `tail(...)`: returns the "tail" of an array, everything except for the first item of the input array.
* `middle(...)`: returns the middle-most element(s) of the given array.
* `countLetters(...)`: take in a sentence(string) and return a count of each of the letters in that sentence into an object.
* `flatten(...)`: take in an array containing nested arrays, and return a single array with all the elements in the array.
* `without(...)`: returns a subset of a given array, removing specific elements(specified from the input argument).
* `map(...)`:  return a new array based on the results of the callback function.
* `letterPositions(...)`: return all the indices in the string where each character is located.
* `findKey(...)`: takes in an object and a callback function. Looks through the object, and returns the value of what the callback function is looking for.
* `findKeyByValue(...)`: takes in an object and a value. It looks through the object and returns the first key that contains the given value. If no key with that given value is found, returns undefined.
* `takeUntil(...)`: returns items in the input array until the callback function's condition meets true.
* `countOnly(...)`: returns an object of specific items (passed in as argument) from the input array.
* `assertEqual(...)`: compare two values if they are strictly identical.
* `eqArrays(...)`: compare two arrays if they are identical.
* `eqObjects(...)`: compare two objects if they are identical.
* `assertArraysEqual(...)`: asserts if two arrays are equal.
* `assertObjectsEqual(...)`: asserts if two objects are equal.