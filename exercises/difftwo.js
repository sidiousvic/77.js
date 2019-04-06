const diffArray = (arr1, arr2) => {
  // concatenate the arrays into one
  let arrs = [].concat(...arguments);
  // filter out elements present in both arrays
  return arrs.filter(x => !arr1.includes(x) || !arr2.includes(x));
};

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(
  diffArray(
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )
);
console.log(diffArray(["elmo"], ["snuffleupagus", "cookie monster", "elmo"]));
console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));
