const spinalCase = str => {
  // create regex to find spaces, underscores, and capital letters
  let regex = /\s+|_+|(?=[A-Z])/g;
  // split() using regex, join() with hyphens, convert toLowerCase()
  return str
    .split(regex)
    .join("-")
    .toLowerCase();
};

console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));
console.log(spinalCase("ILove__Pizza  So Damn-good!!!"));
