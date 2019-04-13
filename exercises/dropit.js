const dropIt = (arr, func) => {
  for (let x in arr) {
    while (func(arr[x]) === false) {
      arr.shift();
    }
    break;
  }
  return arr;
};

console.log(
  dropIt([0, 1, 0, 1], function(n) {
    return n === 1;
  })
);
// [ 1, 0, 1 ]
