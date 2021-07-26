//Counts number of each alphabet in a sentence and returns an object
const countLetters = (sentence) => {
  //initialize an object to return with final result
  let countedLetters = {};
  //separate each letter of string
  let separatedSentence = sentence.split(' ').join('');
  //loop through the string
  for (const letters of separatedSentence) {
  //add each letter to the result object
  //if there's more than one, increment, if not, just add.
    if (countedLetters[letters]) {
      countedLetters[letters] += 1;
    }  else {
      countedLetters[letters] = 1;
    }
    //return counted object
    
  }
  return countedLetters;
};

module.exports = countLetters;