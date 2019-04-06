const sumFibs = num => {
  let result = [1, 1];
  // make array with fibonacci sequence integers < num
  while (result[0] + result[1] <= num) {
    result.unshift(result[1] + result[0]);
  }
  // return the sum of all odd integers in array
  return result.filter(x => x % 2 != 0).reduce((a, b) => a + b);
};

console.log(sumFibs(1000));

// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
// For example, sumFibs(10) => 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

// sumFibs(1000) => 1785
// sumFibs(4000000) => 4613732
// sumFibs(4) => 5
// sumFibs(75024) => 60696
// sumFibs(75025) => 135721
