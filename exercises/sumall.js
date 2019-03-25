function sumAll(arr) {
  arr.sort((a, b) => a - b);
  let result = [];
  for (let x = arr[0]; x <= arr[1]; x++) {
    result.push(x);
  }
  return result.reduce((a, b) => a + b);
}

console.log(sumAll([5, 10]));
