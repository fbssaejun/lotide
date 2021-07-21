const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = (sentence) => {
  //initialize an object to return with final result
  let countedLetters = {}
  //separate each letter of string
  let separatedSentence = sentence.split(' ').join('')
  //loop through the string
  for(const letters of separatedSentence) {
  //add each letter to the result object 
  //if there's more than one, increment, if not, just add.
      if (countedLetters[letters]) {
        countedLetters[letters] += 1;
      }  else {
        countedLetters[letters] = 1
      }
  //   //return counted object
    
  }
  return countedLetters
}

console.log(countLetters("Hello Howdy")) // => { H: 2, e: 1, l: 2, o: 2, w: 1, d: 1, y: 1 }
assertEqual(countLetters("abc")['a'], 1) // => ✅Assertion Passed: 1 === 1