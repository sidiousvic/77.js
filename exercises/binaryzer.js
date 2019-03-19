function binaryzer(str) {
  let splitstr = str.split("");
  let result = [];
  for (let char in str) {
    result.push(str.charCodeAt(char).toString(2));
  }

  return result.join(" ");
}

console.log(binaryzer("Vic is sick."));
