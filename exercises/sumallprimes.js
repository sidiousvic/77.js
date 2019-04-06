const sumPrimes = num => {
  let result = [];
  for (let x = 2; x <= num; x++) {
    result.push(x);
  }
  return result
    .filter(n => {
      for (let m = 2; m <= Math.sqrt(n); m++) {
        if (n % m === 0) return false;
      }
      return true;
    })
    .reduce((a, b) => a + b);
};

console.log(sumPrimes(10));

// The simplest primality test is trial division:
// Given an input number n, check whether any prime integer m from 2 to √n evenly divides n (the division leaves no remainder).
// If n is divisible by any m then n is composite, otherwise it is prime.
