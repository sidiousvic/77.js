const steamroller = arr => {
  let result = [];

  let steamroll = elem => {
    if (!Array.isArray(elem)) {
      result.push(elem);
    } else {
      for (let x in elem) {
        steamroll(elem[x]);
      }
    }
  };

  const each = (array, callback) => {
    let result = [];
    for (let key in array) {
      result.push(callback(array[key]));
    }
    return result;
  };

  each(arr, steamroll);

  return result;
};

console.log(steamroller([1, [2], [3, [[4]]]]));
console.log(steamroller([[["a"]], [["b"]]]));
console.log(steamroller([1, [], [3, [[4]]]]));
console.log(steamroller([1, {}, [3, [[4]]]]));

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
