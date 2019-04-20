function validate(n) {
  let result = [];
  // turn n into array of digits
  let ccn = n
    .toString()
    .split("")
    .map(x => parseInt(x));

  for (let num in ccn) {
    // if array length is even, multiply number at even indexes
    if (ccn.length % 2 === 0) {
      if (num % 2 === 0) ccn[num] = ccn[num] * 2;
      // if array is not even, multiply number at odd indexes
    } else {
      if (num % 2 !== 0) ccn[num] = ccn[num] * 2;
    }
    // if multiplied number exceeds 9, subtract 9 from it
    if (ccn[num] > 9) ccn[num] -= 9;
    result.push(ccn[num]);
  }

  // if the sum of all numbers divided by 10 is 0, return false
  return result.reduce((a, b) => a + b, 0) % 10 === 0;
}
