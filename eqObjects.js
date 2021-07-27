// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1)
  let keys2 = Object.keys(object2)
  let conditionalCheck = true;
  if(keys1.length !== keys2.length) {
      conditionalCheck = false;
    } else {
      for(const key1 of keys1) {
        //Checks for values that are an array
        if(Array.isArray(object1[key1]) && Array.isArray(object2[key1])) {
          if (!eqArrays(object1[key1], object2[key1])) {
            conditionalCheck = false;
          } else {
            conditionalCheck = true;
          }    
        } else {
        //Checks for primitive values 
        if(object1[key1] !== object2[key1]) {
          conditionalCheck = false;
        } else {
         conditionalCheck = true;
        }
        }    
    }
  }
  return conditionalCheck;
}

module.exports = eqObjects;
