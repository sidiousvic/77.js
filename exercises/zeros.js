const zeros = n => {
  let result;
  // each loop we reassign n to n / 5 until n is 0 (falsey)
  // and add the new n to result
  while ((n = Math.floor(n / 5))) result += n;
  return result;
};

console.log(zeros(30));
console.log(zeros(100000));
console.log(zeros(1000000000));
