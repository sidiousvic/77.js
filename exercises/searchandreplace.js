const myReplace = (str, before, after) => {
  // define the index of str at which before begins
  let index = str.indexOf(before);
  // if the character at index is uppercase, let's capitalize after
  if (str[index] === str[index].toUpperCase()) {
    // store the first character of after and uppercase it
    let capital = after
      .split("")
      .shift()
      .toUpperCase();
    // store the rest of after
    let rest = after.slice(1, after.length);
    // put capital and rest together and assign it to after
    after = capital + rest;
  }
  // replace before with after in str and return it
  return str.replace(before, after);
};

console.log(
  myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped")
);
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
