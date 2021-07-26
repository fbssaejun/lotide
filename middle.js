const middle = (array) => {
  const midIndex = Math.floor(array.length/2);
  const middleArray = [];
  if(!array.length) {
    return undefined
  } else if(array.length <= 2) {
    return []
  } else if (array.length % 2 !== 0) {
     middleArray.push(array[midIndex])
  } else {
     middleArray.push(array[midIndex - 1], array[midIndex])
  }
  return middleArray
}

module.exports = middle;

