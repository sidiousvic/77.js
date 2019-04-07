function translatePigLatin(str) {
  // regex to match all vowels
  let vowels = /(a|e|i|o|u)+/g;
  // console.log(str.match(vowels))

  // regex to match first letter if vowel
  let vowel = /^[aeyiuo]/;
  // console.log(str.match(vowel))

  // first consonant or consonant cluster plus "ay"
  let xay = str.split(vowels).shift() + "ay";

  // str without first consonant or consonant cluster
  let pig = str.replace(str.split(vowels)[0], "");

  // if first letter is vowel, just add "way"
  if (str.match(vowel)) {
    return str + "way";
  }

  // if first letter is consonant
  return pig + xay;
}

console.log(translatePigLatin("glove"));
console.log(translatePigLatin("algorithm"));
