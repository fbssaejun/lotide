//take in an array containing nested arrays, and return a single array with all the elements in the array.
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

module.exports = flatten;