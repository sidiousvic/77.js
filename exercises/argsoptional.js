const addTogether = (x, y) => {
  let isNum = num => {
    if (typeof num != "number") {
      return undefined;
    } else {
      return num;
    }
  };

  if (x && y) {
    if (isNum(x) === undefined || isNum(y) === undefined) {
      return undefined;
    }
    return x + y;
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
console.log(addTogether(2)(3));
