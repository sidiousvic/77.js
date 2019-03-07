const nineNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sliceFirstThree = list => {
  "use strict";
  // the rest operator ...arr assigns the unspecified elements to the variable arr
  const [a, b, c, ...arr] = list;
  // then we return arr
  return arr;
};
const slicedFirstThree = sliceFirstThree(nineNumbers);
console.log(slicedFirstThree); // [4,5,6]
console.log(nineNumbers); // [1,2,3,4,5,6,7,8,9]
