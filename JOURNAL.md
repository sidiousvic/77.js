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

- [engineandscope.md](exercises/engineandscope.md)

## Sat 9 Mar 2019

- Read [Chapter 3: Function vs. Block Scope](https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch3.md) of _You Don't Know JS: Scope and Closures_.
- Updated the pluck.js exercise to include a function that calculates unique instances of properties returning `[...new Set()]`.
- Created a program to calculate the mean of a property (or unique properties) in an object using the pluck function.
- Learned how to parse a string property into an integer using `parseInt()`.
- Reviewed using **destructuring assignment** to object properties as arguments: `let f = ({property1, property2}) => {...}`.
- Learned about **template literals** `${...}`, and created a function `makeSmileys()` that and puts an array of emote faces into `(...)` heads using them.

### Exercises

- [pluck.js](exercises/pluck.js)
- [averagereleaseyear.js](exercises/averagereleaseyear.js)
- [makesmileys.js](exercises/makesmileys.js)

## ϞՍ𐊏 ۱᠐ ՊΛᚱ ༢᠐۱Ձ

- ՍϞꝆ𐊏Հ ՊΛՔ()、 ☾ᚱ₹ΛԵ₹Ծ Λ ՔᚱΦՀᚱΛՊ ԵԻΛԵ ԵᚱΛ𐊏ϞՀꝆԵ₹ᚱΛԵ₹Ϟ ΛՀՔԻΛՑ₹ԵꝆ☾ ϞԵᚱꝆ𐊏ՀϞ Ꝇ𐊏ԵΦ **𐊏₹☾ᚱΦՊΛ𐊏ԵꝆ☾**、 Λ𐊏 Ս𐊏ᚱ₹ΛԾΛՑՀ₹ ՔꝆՀ₹ ΦƑ ϞԻꝆԵ.

### ₹×₹ᚱ☾ꝇϟ₹ϟ

- [𐊏₹☾ᚱΦՊλ𐊏եꝇ☾.վϟ](exercises/necromantic.js)

## Mon 11 Mar 2019

- Completed [Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers) on freeCodeCamp.
- Learned how to filter odd numbers in an array by using a `.reduce()` function whose current value is multiplied by itself times the remainder of its half, `current * (current % 2)`.

  This will multiply odd values by 1 and even ones by 0, effectively subtracting them from the sum. `arr.reduce((a, b) => {a + b * (b % 2)}, 0);` (_remember to set initialValue argument to 0!_)

- Ended up using `.filter()` and `.reduce()` separately, for clarity and readability.

### Exercises

- [sumoddfibbs.js](exercises/sumoddfibs.js)

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

- [sumallprimes.js](exercises/sumallprimes.js)

## Wed 13 Mar 2019

- Created an updated version of the _Looping a Triangle_ exercise from _Eloquent Javascript_, [Chapter 2](https://eloquentjavascript.net/02_program_structure.html). Inside a `pyramid` function receiving a `width` parameter, used a `for` loop to `.join()` and `console.log` an increasingly long array of hashes. This way, we can set the size of the pyramid at the function call.

### Exercises

- [pyramid.js](exercises/pyramid.js)

## Thu 14 Mar 2019

- Started working on [Intermediate Algorithm Scripting: Smallest Common Multiple](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple/) on freeCodeCamp. So far, returned an array of sequential numbers between the two values, regardless of order.
- Built a small function to study how scope closures work. By nesting functions and reassigning/modifying variables, we can use variables with the same name without them interfering with their homonyms within parents functions.

### Exercises

- [smallestcommons.js](exercises/smallestcommons.js)
- [innerouter.js](exercises/innerouter.js)

## Fri 15 Mar 2019

- Implemented the [Euclidean algorithm](https://en.wikipedia.org/wiki/Euclidean_algorithm) to calculate the greatest common divisor (GCD) and the least common multiple (LCM) of two values.

### Exercises

- [euclidsalgorithm.js](exercises/euclidsalgorithm.js)

## Sat 16 Mar 2019

- Fighting still with [Intermediate Algorithm Scripting: Smallest Common Multiple](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple/) on freeCodeCamp. Implemented a function that calculates two values' least common multiple (LCM) but still jammed trying to search for the next LCM when the first one does not divide evenly by every numbers in the range between (and including) the two values.

### Exercises

- [euclidsalgorithm.js](exercises/euclidsalgorithm.js)

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

- [smallestcommons.js](exercises/smallestcommons.js)
- [gcd.js](exercises/gcd.js)
- [lcm.js](exercises/lcm.js)
- [dropit.js](exercises/dropit.js)

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

- [each.js](exercises/each.js)

## Tue 19 Mar 2019

- Built a `steamroller` function that _flattens_ arrays of various nested depths by returning their values in a single new array. It contains a function `steamroll` that uses recursion to return values at the deepest level of a nested array.

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

- [steamroller.js](exercise/steamroller.js)

## Wed 20 Mar 2019

- Built functions `binaryzer` and `debinaryzer` that translate between strings of characters and space-separated binary code.

### Exercises

- [binaryzer.js](exercises/binaryzer.js)
- [debinaryzer.js](exercise/debinaryzer.js)

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

- [reducex.js](exercises/reducex.js)

## Fri 22 Mar 2019

- Completed [Intermediate Algorithm Scripting: Everything Be True](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/everything-be-true) on freeCodeCamp.
- Built a function receiving a collection of objects and a `pre` property string. The function checks if all `pre` object properties in `collection` are truthy.
- Used `every()`, which returns either `true` or `false`, to check if every object `obj` possesses a property `pre` by returning `obj[pre]`.

### Exercises

- [everythingbetrue.js](exercises/everythingbetrue.js)

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

- [sumall.js](exercises/sumall.js)
