const addTogether = (x, y) => {
  // build a function to test if argument is number
  let isNum = num => {
    if (typeof num != "number") {
      return undefined;
    } else {
      return num;
    }
  };

  // if arguments x and y are passed and they are numbers, return their sum
  if (x && y) {
    if (isNum(x) === undefined || isNum(y) === undefined) {
      return undefined;
    }
    return x + y;
    // if only x argument is passed, return a function that expects an argument z
    // and returns the sum of both x and z if they are both numbers
  } else {
    if (isNum(x) === undefined) {
      return undefined;
    }
    return z => {
      if (isNum(x) === undefined || isNum(z) === undefined) {
        return undefined;
      }
      return x + z;
    };
  }
};

console.log(addTogether(2, 3));
// 5
console.log(addTogether(2)(3));
// 5
