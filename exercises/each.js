// assign a test function to a variable
const timesNine = num => {
  return num * 9;
};

const each = (collection, callback) => {
  // iterate each element in array, or key in object
  for (let elem in collection) {
    // morph each element's value by executing the callback function on it
    collection[elem] = callback(collection[elem]);
  }
  // log and return the modified collection
  console.log(collection);
  return collection;
};

each([7, 8, 9], timesNine);
// [ 63, 72, 81 ]

each(
  {
    one: 7,
    two: 8,
    three: 9
  },
  timesNine
);
// { one: 63, two: 72, three: 81 }
