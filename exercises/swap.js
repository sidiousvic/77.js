const swap = object => {
  let result = {};
  for (let elem in object) {
    let key = elem;
    let value = object[elem];
    result[value] = key;
  }
  return result;
};

console.log(
  swap({
    nine: 9,
    "ninety-nine": 99,
    "nine hundred ninety-nine": 999,
    "nine thousand nine hundred ninety-nine": 9999
  })
);
