const findKeyByValue = (obj, value) => {
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (obj[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;

