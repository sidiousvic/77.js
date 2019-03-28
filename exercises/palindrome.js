function isPalindrome(str) {
  let regex = /[A-Za-z0-9]/g;
  return (
    str
      .match(regex)
      .join("")
      .toLowerCase() ===
    str
      .match(regex)
      .reverse()
      .join("")
      .toLowerCase()
  );
}

console.log(palindrome("Mr. Owl ate my metal worm!")); //true
console.log(palindrome("Mr. Owl ate my metal worm again!")); //false

function palindrome(str) {
  let regex = /[A-Za-z0-9]/g;
  let alpha = str
    .match(regex)
    .join("")
    .toLowerCase();
  let reverse = str
    .match(regex)
    .reverse()
    .join("")
    .toLowerCase();

  return alpha === reverse;
}

console.log(palindrome("¡Anita lava la tina!")); //true
console.log(palindrome("¡Anita no lavó la tina!")); //false
