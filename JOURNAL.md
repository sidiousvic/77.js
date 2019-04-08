## Tue 5 Mar 2019

- Read [Chapter 1: Into Programming](https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch1.md) of **_You Don't Know JS: Up & Going_**.
- Reviewed spread operators, destructuring assignments in FreeCodeCamp.
- Read a little bit about Node.js.

### Exercises

[guitarshop.js](exercises/guitarshop.js)

## Wed 6 Mar 2019

- Learned about `Object.create()`
- Read about prototype inheritance.
- Wrote a pluck function that returns property values from an array.

### Exercises

[pluck.js](exercises/pluck.js)

## Thu 7 Mar 2019

- [Learned about execution context, and how that creates scope and closures.](https://www.youtube.com/watch?v=Nt-qa_LlUH0)
- Read [Chapter 2: Into JavaScript](https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch2.md) and [Chapter 3: Into YSKJS](https://github.com/getify/You-Dont-Know-JS/blob/master/up%20%26%20going/ch3.md) of _You Don't Know JS: Up & Going_.
- Learned about the rest and spread operators `[...]`
- Solved a problem illustrating how the rest operator can be used to concatenate/join arrays.
- Created a program that uses the rest operator to slice the beggining of an array in the same way as `.slice()` does.

### Exercises

[joinusingspreadoperator.js](exercises/joinusingspreadoperator.js)

[restoperatorslice.js](exercises/restoperatorslice.js)

## Fri 8 Mar 2019

- Read [Chapter 1: What is Scope?](https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch1.md) and [Chapter 2: Lexical Scope](https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch2.md) of _You Don't Know JS: Scope and Closures_.
- Learned about the metaphorical conversation between the JavaScript **engine**, **compiler** and **scope**.
- Learned about the **_left hand side_** (LHS) and **_right hand side_** (RHS) **_lookups_** that take place during that conversation.
- Replicated a quiz from the book to recreate the dialogue between the engine and scope.

### Exercises

[engineandscope.md](exercises/engineandscope.md)

## Sat 9 Mar 2019

- Read [Chapter 3: Function vs. Block Scope](https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch3.md) of _You Don't Know JS: Scope and Closures_.
- Updated the pluck.js exercise to include a function that calculates unique instances of properties returning `[...new Set()]`.
- Created a program to calculate the mean of a property (or unique properties) in an object using the pluck function.
- Learned how to parse a string property into an integer using `parseInt()`.
- Reviewed using **destructuring assignment** to object properties as arguments: `let f = ({property1, property2}) => {...}`.
- Learned about **template literals** `${...}`, and created a function `makeSmileys()` that and puts an array of emote faces into `(...)` heads using them.

### Exercises

[pluck.js](exercises/pluck.js)

[averagereleaseyear.js](exercises/averagereleaseyear.js)

[makesmileys.js](exercises/makesmileys.js)

## ϞՍ𐊏 ۱᠐ ՊΛᚱ ༢᠐۱Ձ

- ՍϞꝆ𐊏Հ ՊΛՔ()、 ☾ᚱ₹ΛԵ₹Ծ Λ ՔᚱΦՀᚱΛՊ ԵԻΛԵ ԵᚱΛ𐊏ϞՀꝆԵ₹ᚱΛԵ₹Ϟ ΛՀՔԻΛՑ₹ԵꝆ☾ ϞԵᚱꝆ𐊏ՀϞ Ꝇ𐊏ԵΦ **𐊏₹☾ᚱΦՊΛ𐊏ԵꝆ☾**、 Λ𐊏 Ս𐊏ᚱ₹ΛԾΛՑՀ₹ ՔꝆՀ₹ ΦƑ ϞԻꝆԵ.

### ₹×₹ᚱ☾ꝇϟ₹ϟ

[𐊏₹☾ᚱΦՊλ𐊏եꝇ☾.վϟ](exercises/necromantic.js)

## Mon 11 Mar 2019

- Completed [Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers) on freeCodeCamp.
- Learned how to filter odd numbers in an array by using a `.reduce()` function whose current value is multiplied by itself times the remainder of its half, `current * (current % 2)`. This will multiply odd values by 1 and even ones by 0, effectively subtracting them from the sum. `arr.reduce((a, b) => {a + b * (b % 2)}, 0);` (_remember to set initialValue argument to 0!_)

- Ended up using `.filter()` and `.reduce()` separately, for clarity and readability.

### Exercises

[sumoddfibbs.js](exercises/sumoddfibs.js)

## Tue 12 Mar 2019

- Completed [Intermediate Algorithm Scripting: Sum All Primes](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes) on freeCodeCamp.
- Learned how to code a [primality test](https://en.wikipedia.org/wiki/Primality_test). Given an integer _n_, if any prime numbers _m_ from 2 to √n divide n evenly, n is not prime. Otherwise, it is prime.

```js
for (let m = 2; m <= Math.sqrt(n); m++) {
  if (n % m === 0) return false;
}
return true;
```

### Exercises

[sumallprimes.js](exercises/sumallprimes.js)

## Wed 13 Mar 2019

- Created an updated version of the _Looping a Triangle_ exercise from _Eloquent Javascript_, [Chapter 2](https://eloquentjavascript.net/02_program_structure.html). Inside a `pyramid` function receiving a `width` parameter, used a `for` loop to `.join()` and `console.log` an increasingly long array of hashes. This way, we can set the size of the pyramid at the function call.

### Exercises

[pyramid.js](exercises/pyramid.js)

## Thu 14 Mar 2019

- Started working on [Intermediate Algorithm Scripting: Smallest Common Multiple](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple/) on freeCodeCamp. So far, returned an array of sequential numbers between the two values, regardless of order.
- Built a small function to study how scope closures work. By nesting functions and reassigning/modifying variables, we can use variables with the same name without them interfering with their homonyms within parents functions.

### Exercises

[smallestcommons.js](exercises/smallestcommons.js)

[innerouter.js](exercises/innerouter.js)

## Fri 15 Mar 2019

- Implemented the [Euclidean algorithm](https://en.wikipedia.org/wiki/Euclidean_algorithm) to calculate the greatest common divisor (GCD) and the least common multiple (LCM) of two values.

### Exercises

[euclidsalgorithm.js](exercises/euclidsalgorithm.js)

## Sat 16 Mar 2019

- Fighting still with [Intermediate Algorithm Scripting: Smallest Common Multiple](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple/) on freeCodeCamp. Implemented a function that calculates two values' least common multiple (LCM) but still jammed trying to search for the next LCM when the first one does not divide evenly by every numbers in the range between (and including) the two values.

### Exercises

[euclidsalgorithm.js](exercises/euclidsalgorithm.js)

## Sun 17 Mar 2019

- Completed [Intermediate Algorithm Scripting: Smallest Common Multiple](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple/) on freeCodeCamp. Having already transcoded the [Euclidean algorithm](https://en.wikipedia.org/wiki/Euclidean_algorithm), calculated the least common multiple of the current and next number in the range between the values entered with a simple `while` loop.

```js
while (min < max) {
  min++;
  LCM = lcm(LCM, min);
}
```

- Completed [Intermediate Algorithm Scripting: Drop it](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/drop-it/) on freeCodeCamp in under 5 minutes. Used a `for` loop to iterate and pass each array element to the test function, `shift`ing the array `while` the function returns false—or in other words, until it returns `true`—finally returning the modified array.

### Exercises

[smallestcommons.js](exercises/smallestcommons.js)

[gcd.js](exercises/gcd.js)

[lcm.js](exercises/lcm.js)

[dropit.js](exercises/dropit.js)

## Mon 18 Mar 2019

- Built a function `each` that takes an array and a function as arguments, then executes that function for each element in the array (basically, an implementation on `forEach`).
- Remember to `console.log` every step possible in order to be aware at all times of any typos or bugs.
- Be consistent, don't use both arrow functions and normal function declarations. Use one kind only.
- The syntactic difference between function _expressions_ and _declarations_ is the following:

**Function expression**

```js
let sicky = function(args) {
  //do someting sick
};
```

**Function declaration**

```js
function sicko(args) {
  //do someting sick
}
```

- Function _declarations_ are hoisted, while function _expressions_ are not.

### Exercises

[each.js](exercises/each.js)

## Tue 19 Mar 2019

- Built a `steamroller` function that flattens arrays of various nested depths by returning their values in a single new array. It contains a function `steamroll` that uses recursion to return values at the deepest level of a nested array.

```js
let steamroll = elem => {
  if (!Array.isArray(elem)) {
    result.push(elem);
  } else {
    for (let x in elem) {
      steamroll(elem[x]);
    }
  }
};
```

- Used my own each function from yesterday in lieu of `forEach` as practice.

### Exercises

[steamroller.js](exercise/steamroller.js)

## Wed 20 Mar 2019

- Built functions `binaryzer` and `debinaryzer` that translate between strings of characters and space-separated binary code.

### Exercises

[binaryzer.js](exercises/binaryzer.js)

[debinaryzer.js](exercise/debinaryzer.js)

## Thu 21 Mar 2019

- Built an implementation of the `reduce()` method in order to understand it better.
- Reduce takes a callback and an inital value as arguments. If an inital value has been set, the inital value is initalized inside the function as `accumulator`. If not, `accumulator` starts out as `undefined`.
- We then loop through the array we are executing the function on (referenced as `this` because of _execution context_). If `accumulator` is `undefined`, we assign it the current array value; otherwise, we assign it to a `call()` of the callback function.
- The callback receives `undefined`, `accumulator`, the current array value, the index of that value, and the array itself as parameters.
- In the end we return `accumulator`.

```js
Array.prototype.reduceX = function(callback, initVal) {
  let accum = initVal === undefined ? undefined : initVal;
  for (let x = 0; x < this.length; x++) {
    if (accum !== undefined) {
      accum = callback.call(undefined, accum, this[x], x, this);
    } else {
      accum = this[x];
    }
  }
  return accum;
};
```

### Exercises

[reducex.js](exercises/reducex.js)

## Fri 22 Mar 2019

- Completed [Intermediate Algorithm Scripting: Everything Be True](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/everything-be-true) on freeCodeCamp.
- Built a function receiving a collection of objects and a `pre` property string. The function checks if all `pre` object properties in `collection` are truthy.
- Used `every()`, which returns either `true` or `false`, to check if every object `obj` possesses a property `pre` by returning `obj[pre]`.

### Exercises

[everythingbetrue.js](exercises/everythingbetrue.js)

## Sat 23 Mar 2019

- Reviewed the challenge [Intermediate Algorithm Scripting: Sum All Numbers in a Range](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range) on freeCodeCamp.
- `sort()` orders elements in an array by converting to strings and comparing their UTF-16 code units values. This means it will order strings alphabetically by default, but not integers. To order integers, we specify a function to compare two values at a time.

From [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort):

> - If compareFunction(a, b) is less than 0, sort a to an index lower than b (i.e. a comes first)
> - If compareFunction(a, b) returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements. Note: the ECMAscript standard does not guarantee this behaviour, and thus not all browsers (e.g. Mozilla versions dating back to at least 2003) respect this.
> - If compareFunction(a, b) is greater than 0, sort b to an index lower than a (i.e. b comes first).
> - compareFunction(a, b) must always return the same value when given a specific pair of elements a and b as its two arguments. If inconsistent results are returned then the sort order is undefined.

- Knowing this we can define a simple function `sort((a, b) => a - b)` that will set items in ascending order.
- For example, in an array `[10, 5, 99]` first `5` will be subtracted from `10`. Since the result is greater than 0 (5), `5` or `b` is sorted to an index lower than `10`, or `a`. Next next `9` will be subtracted from `10`. The result is less than 0 (-89) and thus `10` is set to an index lower than `99`, which it already is.

### Exercises

[sumall.js](exercises/sumall.js)

## Sun 24 Mar 2019

- Completed [Intermediate Algorithm Scripting: Arguments Optional](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional) on freeCodeCamp.
- As long as arguments are of the `number` type, the function either sums two given arguments or returns another function that sums one given argument with a new one.
- For example, `addTogether(2, 3)` will return `5` as well as `addTogether(2)(3)`.
- If any argument is not of the `number` type, `undefined` is returned.

### Exercises

[argsoptional.js](exercises/argsoptional.js)

## Wed 27 Mar 2019

- Completed [Intermediate Algorithm Scripting: Make A Person](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/make-a-person) on freeCodeCamp.
- Learned more about constructors, and how to create and modify objects using get and set methods.
- Completed [Intermediate Algorithm Scripting: Map the Debris](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/map-the-debris) on freeCodeCamp.
- Built a function that takes an object with an `avgAlt` key and returns it after transforming `avgAlt` into `orbitalPeriod` using Kepler's orbital period formula:

> According to [Kepler's Third Law](https://en.wikipedia.org/wiki/Kepler%27s_laws_of_planetary_motion), the **orbital period** _T_ (in seconds) of two point masses orbiting each other in a circular or elliptic orbit is:
> T = 2π√a³/μ
> where:
>
> - a is the orbit's semi-major axis
> - μ = GM is the standard gravitational parameter
> - G is the gravitational constant,
> - M is the mass of the more massive body.
> - For all ellipses with a given semi-major axis the orbital period is the same, regardless of eccentricity.

- After transcoding, ended up with:

```js
let T = Math.round(
  Math.PI * 2 * Math.sqrt(Math.pow(earthRadius + obj.avgAlt, 3) / GM)
);
```

### Exercises

[makeaperson.js](exercises/makeaperson.js)

[orbitalperiod.js](exercises/orbitalperiod.js)

## Thu 28 Mar 2019

- Completed [JavaScript Algorithms and Data Structures Projects: Palindrome Checker](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker) in freeCodeCamp.
- Built a function that receives a string and verifies if the string is a [palindrome](https://en.wikipedia.org/wiki/Palindrome).
- The function utilizes a regex expression to ignore case and non-alphanumeric characters (such as spaces). Using `match()`, `join()`, `reverse()` and `toLowerCase()` to check for strict equality between two processed (one reversed) versions of the string.
- We can use strict equality `===` to compare two strings since it does not permit type coercion.
- Completed [JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter) in freeCodeCamp.
- Built a function that receives a number, and construct a new array of each digit's decimal value in the number (ex. 666 => 600, 60, 6). It then mutates each element in the array into its roman numeral equivalent using `map()` and stitches it together with `join()`.
- Completed [JavaScript Algorithms and Data Structures Projects: Caesars Cipher](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher) in freeCodeCamp.
- Built a function that uses a regex to `replace()` alphanumeric characters in a string with the return value of a [ROT13](https://en.wikipedia.org/wiki/ROT13) ciphering function.
- The ciphering function iterates each character and gets its Unicode value. We can use the modulo operator `%` to get the remainder of the Unicode value over `26` (the range of possible alphanumeric characters, [0-25]) effectively mapping each value to an index between 0 and 25.
- Using the number 65 (Unicode value of [A]) as an offset which maps to the number 13, we can get a values's ROT13 equivalent by simply adding the Unicode value and the remainder of itself and 26, using `String.fromCharCode()`:

```js
str.replace(/[A-Z]/g, x => String.fromCharCode((x.charCodeAt(0) % 26) + 65));
```

### Exercises

[palindrome.js](exercises/palindrome.js)

[romanizer.js](exercises/romanizer.js)

[rot13.js](exercises/rot13.js)

## Fri 29 Mar 2019

- Completed [JavaScript Algorithms and Data Structures Projects: Telephone Number Validator](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator/) on freeCodeCamp.
- Used a [regex](https://en.wikipedia.org/wiki/Regular_expression) to validate a telephone number according to US standards.
- US telephone numbers may have either 10 or 11 digits; if 11, the first should be a `1` (the country code). After that, the first three numbers (the area code) may or may not be enclosed in parentheses, (e.g. `999` or `(999)`) if the main 10-digit number is arranged in a 3-3-4 format, the separators may be spaces `` or hyphens `-`.
- After some research, stole and used the following expression:

```js
/^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
```

Where:

> - `^` marks the beggining of the string.
> - `(1\s?)?` A `?` mark makes the preceding statement optional. This expects a `1` followed (or not) by a whitespace character `\s`.
> - `(\(\d{3}\)|\d{3})` A `|` mark means either this or that. Here we expect three digits surrounded by parentheses `(\d{3}\)` or `|` not `\d{3}`.
> - `[\s\-]?` expects an optional `?` whitespace character `\s`.
> - `\d{3}` expects any three digits in a row.
> - Again, `[\s\-]?` expects an optional whitespace character.
> - Lastly, `\d{4}` expects any 4 digits in a row.
> - `$` marks the end of the string.

### Exercises

[usphone.js](exercises/usphone.js)

## Sat 30 Mar 2019

- Began work on [JavaScript Algorithms and Data Structures Projects: Cash Register](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register/) on freeCodeCamp.
- Began by flattening a `cid` array containing the dollar value of various cash denomination quantities and reducing it to a total dollar number `reg`.
- Defined `change` as `price` minus `cash`. Then established conditions based on whether change is more, equal or less than `reg`.

### Exercises

[cashregister.js](exercises/cashregister.js)

## Mon 01 Apr 2019

- Still working on [JavaScript Algorithms and Data Structures Projects: Cash Register](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register/) on freeCodeCamp.
- Accounted for first two scenarios, `CLOSED` and `INSUFFICIENT_FUNDS` by simply comparing the `change` variable to `reg` for less than or equal to, respectively.
- Tried reversing the `cid` array in order to subtract denominations starting from highest to lowest.

### Exercises

[cashregister.js](exercises/cashregister.js)

## Wed 03 Apr 2019

- Completed [JavaScript Algorithms and Data Structures Projects: Cash Register](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register/) on freeCodeCamp.
- For last scenario, created an array `denom` of denomination `name:val` (_val_ as in _value_) pairs from highest to lowest, and an array `register` of denominations in `cid` in the same format as `denom`.
- Looping through each denomination `billcoin` in `denom`, we subtract each `billcoin` value from `change` and `register` as long (`while`) as any such denomination remains in `register` and change is more or equal to zero.
- To a variable `value` resetted each loop, we add the total of the `billcoin` used at the nested `while` loop. If a `billcoin` was used, we `push()` its name along with `value` as a subarray to the `change` object array.
- If we did not `push()` any subarrays into `change`, that means that we cannot give exact change, and thus we account for the last remaining scenario as we return `INSUFFICIENT_FUNDS` and the empty `change` array.
- If we did modify `change`, we simply return its parent `output` in the end.

### Exercises

[cashregister.js](exercises/cashregister.js)

## Thu 04 Apr 2019

- Began to refactor the **Intermediate Algorithm Scripting** challenges on freeCodeCamp, RRC
- Refactored and commented [Intermediate Algorithm Scripting: Sum All Numbers in a Range](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range) on freeCodeCamp.
- We `sort()` both array elements from low to high, then push all consecutive numbers to a `result` array starting from the first element until the last using a `for` loop. Finally, we return the sum of all numbers in `result` using `reduce()`.

### Exercises

[sumall.js](exercises/sumall.js)

## Sat 06 Apr 2019

- Completed [Intermediate Algorithm Scripting: Diff Two Arrays](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/diff-two-arrays) on freeCodeCamp.
- Used `[].concat(arguments)` to create a new array combining the elements of all arguments.
- Used `includes()` as a condition with `filter()` to weed out the elements present in both arrays, returning only the unique ones.
- Completed [Intermediate Algorithm Scripting: Seek and Destroy](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/seek-and-destroy) on freeCodeCamp.
- Merged the arguments into a single new array `xargs` using `[].concat(arguments)` and sliced off the array argument to leave only the extra arguments, our tests.
- Using `filter()`, we return the elements that don't match our test arguments.
- Completed [Intermediate Algorithm Scripting: Wherefore Art Thou?](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/wherefore-art-thou) on freeCodeCamp.
- Made an array `sourcekeys` from the `source` argument objects' keys using `Object.keys()`.
- Using `map()`, tested whether each key in `sourcekeys` exists in a particular object from `collection`, and if their value pairs are the same.
- Using `reduce()`, aggregated all returned booleans into a single value.
- Using `filter()`, we pass an element into our return array only if the above tests reduced to true.
- Updated all functions in [study.js/exercises] to ES6 arrow function syntax.

### Exercises

[difftwo.js](exercises/difftwo.js)

[destroyer.js](exercices/destroyer.js)

[whatsinaname.js](exercises/whatsinaname.js)

## Sun 07 Apr 2019

- Completed [Intermediate Algorithm Scripting: Spinal Tap Case](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case) on freeCodeCamp.
- Created a regex to identify underscores, spaces, and using a positive lookahead for capital letters, camelcase.
- We then split at regex using `split(regex)`, join with hyphens using `join(-)`, and convert to lowercase using `toLowerCase()`.
- Completed [Intermediate Algorithm Scripting: Pig Latin](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin) on freeCodeCamp.
- Built regex `vowels` to match all vowels in a string, and `vowel` to match the first letter in a string only if it is a vowel.
- `split()` will delete the element at which we split, and so if `split(vowels)` matches the first element, it will return an array with an empty first element. Otherwise, it will return an array with a consonant or consonant cluster as the first element. Chaining this with `shift()`, we return such first element, finally adding `+ "ay"` to it and storing it in a variable `xay`.

`glove` => `[gl, o, v, e]` => `gl` => `glay`

- Using the same logic, we `replace()` the first consonant cluster `str.split(vowels)[0]` with nothing and store it in a variable `pig`.

`glove` => `gl,o,v,e` => `ove`

- Using an `if` statement and our regex `vowel`, we check whether the string begins with a vowel. If it does, we simply return the word as is, plus `"ay"`.
- Otherwise, if the string does not begin with a vowel, we return `pig` plus `xay`.

### Exercises

[spinalcase.js](exercises/spinalcase.js)

[piglatin.js](exercises/piglatin.js)

## Mon 08 Apr 2019

- Reloaded the exercise [each.js](exercises/each.js)
- The objective is to create a function that takes a `collection` parameter (array or object) and executes a second `callback` parameter on all its elements.
- Declared a test function `timesNine` that takes a number and multiplies it by nine.
- Within a main `each` function, we iterate each element of the `collection` using `for(let ... in ...)` and equalize each of its elements to the result of passing that element through our `callback` function.
- We log and return the modified collection.

### Exercises

[each.js](exercises/each.js)
