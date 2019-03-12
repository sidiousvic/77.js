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

- Completed the [Intermediate Algorithm Scripting: Sum All Odd Fibonacci Numbers](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers) challenge on freeCodeCamp.
- Learned how to filter odd numbers in an array by using a `.reduce()` function whose current value is multiplied by itself times the remainder of its half, `current * (current % 2)`.

  This will multiply odd values by 1 and even ones by 0, effectively subtracting them from the sum. `arr.reduce((a, b) => {a + b * (b % 2)}, 0);` (_remember to set initialValue argument to 0!_)

- Ended up using `.filter()` and `.reduce()` separately, for clarity and readability.

### Exercises

- [sumoddfibbs.js](exercises/sumoddfibs.js)

## Tue 12 Mar 2019

- Completed [Intermediate Algorithm Scripting: Sum All Primes](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes)
- Learned how to code a [primality test](https://en.wikipedia.org/wiki/Primality_test). Given an integer _n_, if any prime numbers _m_ from 2 to √n divide n evenly, n is not prime. Otherwise, it is prime.

```js
for (let m = 2; m <= Math.sqrt(n); m++) {
  if (n % m === 0) return false;
}
return true;
```

### Exercises

- [sumallprimes.js](exercises/sumallprimes.js)

<!--
## Date

-
-
-
-

[link](url)

### Exercises

- [exercise.js](exercises/path) -->
