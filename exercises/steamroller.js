function steamroller(arr) {
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
}

console.log(steamroller([1, [2], [3, [[4]]]]));
console.log(steamroller([[["a"]], [["b"]]]));
console.log(steamroller([1, [], [3, [[4]]]]));
console.log(steamroller([1, {}, [3, [[4]]]]));
