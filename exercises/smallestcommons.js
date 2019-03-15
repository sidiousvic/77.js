function smallestCommons(arr) {
  arr.sort((a, b) => a - b);
  let seq = [];
  for (let x = arr[0]; x <= arr[1]; x++) {
    seq.push(x);
  }
  return seq;
}

console.log(smallestCommons([5, 9]));
