const debinaryzer = str => {
  let binstr = str.split(" ");
  let result = [];
  for (let char in binstr) {
    result.push(String.fromCharCode(parseInt(binstr[char], 2)));
  }

  return result.join("");
};

console.log(
  debinaryzer(
    "1010110 1101001 1100011 100000 1101001 1110011 100000 1110011 1101001 1100011 1101011 101110"
  )
);
