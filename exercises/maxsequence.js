const maxSequence = arr => {
  let sum = 0;
  let max = 0;
  for (let num in arr) {
    // let sum be the sum of tem and the current number if it is above 0.
    sum = Math.max(0, sum + arr[num]);
    // let max be as high as the highest tem we have processed.
    max = Math.max(sum, max);
  }
  return max;
};

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSequence([-2, 3, 4, -2])); // 7
