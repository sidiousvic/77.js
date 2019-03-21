Array.prototype.reduceX = function(callback, initVal) {
  let accum = initVal === undefined ? undefined : initVal;
  for (let x = 0; x < this.length; x++) {
    if (accum !== undefined) {
      accum = callback.call(undefined, accum, this[x], x, this);
    } else {
      accum = this[x];
    }
  }
  return accum;
};

let nums = [9, 9, 9, 9, 9];

let sum = nums.reduceX(function(a, b) {
  return a + b;
}, 0);
console.log(sum);
