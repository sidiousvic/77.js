var recoverSecret = function(triplets) {
  let obj = {};

  for (let arr in triplets) {
    for (let elem in triplets[arr]) {
      obj[elem] = triplets[arr][elem];
    }
  }

  console.log(obj);

  return 0;
};

let secret1 = "whatisup";
let triplets1 = [
  ["t", "u", "p"],
  ["w", "h", "i"],
  ["t", "s", "u"],
  ["a", "t", "s"],
  ["h", "a", "p"],
  ["t", "i", "s"],
  ["w", "h", "s"]
];

let secret2 = "mathisfun";
let triplets2 = [
  ["t", "s", "f"],
  ["a", "s", "u"],
  ["m", "a", "f"],
  ["a", "i", "n"],
  ["s", "u", "n"],
  ["m", "f", "u"],
  ["a", "t", "h"],
  ["t", "h", "i"],
  ["h", "i", "f"],
  ["m", "h", "f"],
  ["a", "u", "n"],
  ["m", "a", "t"],
  ["f", "u", "n"],
  ["h", "s", "n"],
  ["a", "i", "s"],
  ["m", "s", "n"],
  ["m", "s", "u"]
];

console.log(recoverSecret(triplets1));
// console.log(recoverSecret(triplets2));

[
  "t",
  "u",
  "p",
  "w",
  "h",
  "i",
  "t",
  "s",
  "u",
  "a",
  "t",
  "s",
  "h",
  "a",
  "p",
  "t",
  "i",
  "s",
  "w",
  "h",
  "s"
];

let obj = {
  "0": "t",
  "1": "u",
  "2": "p",
  "3": "w",
  "4": "h",
  "5": "i",
  "6": "t",
  "7": "s",
  "8": "u",
  "9": "a",
  "10": "t",
  "11": "s",
  "12": "h",
  "13": "a",
  "14": "p",
  "15": "t",
  "16": "i",
  "17": "s",
  "18": "w",
  "19": "h",
  "20": "s"
};
