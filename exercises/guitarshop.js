const TAX_RATE = 0.09;
const GUITAR_PRICE = 999;
const AMP_PRICE = 499;
const SPENDING_THRESHOLD = 3000;

let bankBalance = 5000;

const calcTax = amount => {
  return amount + amount * TAX_RATE;
};

const inDollars = amount => {};

console.log(calcTax(GUITAR_PRICE));
