// create empty object
let sevens = {};
// create test array
let seven = [1, 2, 3, 4, 5, 6, 7];

// add key.value pairs
sevens.seven = 7;
sevens["seventy-seven"] = 77;
sevens["seven hundred seventy-seven"] = 777;

// test function
const times9 = num => {
  return num * 9;
};

// each function applies function to every element in collection
const each = (collection, callback) => {
  let result = {};
  for (let elem in collection) {
    result[elem] = callback(collection[elem]);
  }
  return result;
};

console.log(each(sevens, times9), "each(sevens, times9)");
console.log(each(seven, times9), "each(seven, times9)");

// store result of each(sevens, times9) in variable
let sevensTimes9 = each(sevens, times9);

// swap function swaps key.value pairs
const swap = obj => {
  let result = {};
  for (let key in obj) {
    let value = obj[key];
    result[value] = key;
  }
  return result;
};

console.log(swap(sevensTimes9));
