const smallestCommons = arr => {
  let min = Math.min(...arr),
    max = Math.max(...arr);

  let gcd = (n, m) => {
    if (n > m) [n, m] = [m, n];
    let r = n % m;
    while (r > 0) {
      n = m;
      m = r;
      r = n % m;
    }
    return m;
  };

  let lcm = (n, m) => {
    return (m * n) / gcd(m, n);
  };

  let LCM = lcm(min, min + 1);

  while (min < max) {
    min++;
    LCM = lcm(LCM, min);
  }

  return LCM;
};

console.log(smallestCommons([1, 5]));
