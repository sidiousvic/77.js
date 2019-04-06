const gcd = (n, m) => {
  if (n > m) [n, m] = [m, n];
  let r = n % m;
  while (r > 0) {
    n = m;
    m = r;
    r = n % m;
  }
  return m;
};
