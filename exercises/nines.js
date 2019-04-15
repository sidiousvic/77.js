// create an object
var nines = {
  "9": "nine",
  "99": "ninety-nine",
  "999": "nine hundred ninety-nine"
};

// swap() returns obj with key:value pairs swapped
const swap = obj => {
  let result = {};
  for (let key in obj) {
    let value = obj[key];
    result[value] = key;
  }
  return result;
};

// timesNine() returns num multiplied times nine
const timesNine = num => {
  return num * 9;
};

// each() applies a fucntion to each collection's values and returns collection
const each = (collection, callback) => {
  for (let elem in collection) {
    collection[elem] = callback(collection[elem]);
  }
  return collection;
};

// toNum() parses a string into a number type
const toNum = str => {
  return parseInt(str);
};

// we execute each with nines object swapped
// timesNine() receives a string, but type coercion allows it to be multiplied and return a number
console.log(each(swap(nines), timesNine));
// { nine: 81, 'ninety-nine': 891, 'nine hundred ninety-nine': 8991 }
