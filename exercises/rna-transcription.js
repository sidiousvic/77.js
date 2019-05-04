export { toRna };

const toRna = DNA => {
  // create DNA:RNA object
  let DNAxRNA = {
    G: "C",
    C: "G",
    T: "A",
    A: "U"
  };
  // split() DNA into array + map each letter to its value in DNAxRNA + join() back into string
  return DNA.split("")
    .map(x => DNAxRNA[x])
    .join("");
};

// console.log(toRna(""));
// console.log(toRna("C"));
// console.log(toRna("G"));
// console.log(toRna("T"));
// console.log(toRna("A"));
// console.log(toRna("UGCACCAGAAUU"));
