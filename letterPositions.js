const assertArraysEqual = require('./assertArraysEqual')


const letterPositions = function(sentence) {
  const results = {};
  const combinedSentence = sentence.split(' ').join('')
  //loop through each letter in the sentence
  for(let i = 0; i < combinedSentence.length; i++) {
    if(results[combinedSentence[i]]) {
      results[combinedSentence[i]].push(i)     //This also works [...results[combinedSentence[i]], i]
    } else {
      //If the 'key' does not exsist in the object yet, initialize the key
      results[combinedSentence[i]] = [i]
    }

  }
  return results;
};

module.exports = letterPositions;

//Test Case:
console.log(letterPositions("hello howdy"));
assertArraysEqual(letterPositions("hello").e, [1]);



