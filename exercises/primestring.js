function primeString(s) {
  return (s + s).indexOf(s, 1) == s.length;
}

// duplicate the string
// if we find an instance of s until the duplicate begins, string is prime
// if we find an instance of s spanning the halves of the duplicate, string ain't prime
