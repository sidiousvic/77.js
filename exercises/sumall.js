const sumAll = arr => {
  // sort array from low to high
  arr.sort((a, b) => a - b);
  console.log(arr);

  let result = [];
  // from first array element until last, push consecutive numbers to result
  for (let x = arr[0]; x <= arr[1]; x++) {
    result.push(x);
  }
  console.log(result);
  // reduce/sum all numbers in result
  return result.reduce((a, b) => a + b);
};

console.log(sumAll([5, 10]));
