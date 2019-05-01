const solution = num => {
  return [...Array(num).keys()] // array of successive ints leading to num
    .filter(x => x % 3 === 0 || x % 5 === 0) // filter multiples of 3 and 5
    .reduce((a, b) => a + b, 0); // sum the array
};

console.log(solution(10));
