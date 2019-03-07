const abc = ["a", "b", "c"];
const xyz = ["x", "y", "z"];
const joinUsingSpread = (arr1, arr2) => {
  let result = [...arr1, ...arr2];

  return result;
};

const joinedUsingSpread = joinUsingSpread(abc, xyz);
console.log(joinedUsingSpread);
