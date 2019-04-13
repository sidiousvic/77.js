function pigIt(str) {
  // capturing groups to replace
  // $1. (\w) a word character
  // $2. (\w*) a word character (greedy)
  // $3. (\s|$) a space or end of a line
  // replacement
  // $2 + $1 + "ay" + $3, or "$2$1ay$3"
  return str.replace(/(\w)(\w*)(\s|$)/g, "$2$1ay$3");
}

console.log(pigIt("Pig latin is cool"));
// igPay atinlay siay oolcay
