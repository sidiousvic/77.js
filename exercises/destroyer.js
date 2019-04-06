const destroyer = arr => {
  //merge array and extra arguments into single array, then slice away the array
  let xargs = [].concat(...arguments).slice(arr.length);
  // return the elements that don't match the extra arguments
  return arr.filter(x => !xargs.includes(x));
};

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
