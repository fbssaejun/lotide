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

const assertArrayEqual = (actual, expected) => {
  eqArrays(actual, expected) ? console.log(`✅Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
}



const flatten = (array) => {
  let flatArray = [];
  for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
          for (const el of array[i]) {
              flatArray.push(el);
          }
      } else {
          flatArray.push(array[i])
      }
  }
  return flatArray
}

