const assertEqual = require('../assertEqual');
let head = require('../head.js');

//TEST CODE:
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), 1)