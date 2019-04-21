const thirt = n => {
  // create a reversed array of digits of n
  let nums = n
    .toString()
    .split("")
    .reverse();

  // create an array of the sequence of multipliers
  let thirts = [1, 10, 9, 12, 3, 4];

  // multiply and sum
  let product = nums.reduce((s, v, i) => s + v * thirts[i % thirts.length], 0);

  // if product is stationary, return n
  return product === n ? n : thirt(product);
};

console.log(thirt(1234567)); // 87
console.log(thirt(8529)); // 79
console.log(thirt(85299258)); // 31
console.log(thirt(5634)); // 57
console.log(thirt(1111111111)); // 71
