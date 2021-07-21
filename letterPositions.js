const eqArrays = (firstArr, secondArr) => {
  if(firstArr.length === secondArr.length) {
  for(let i = 0; i < firstArr.length; i++) {
    if(firstArr[i] !== secondArr[i]) {
      return false;
    } 
   }
   return true;
  }
}

const assertArraysEqual = (actual, expected) => {
  eqArrays(actual, expected) ? console.log(`✅Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
}



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



console.log(letterPositions("hello howdy"));
assertArraysEqual(letterPositions("hello").e, [1]);



