const TAX_RATE = 0.09;
const GUITAR_PRICE = 999;
const AMP_PRICE = 99;
const SPENDING_THRESHOLD = 5000;

// let bankBalance = prompt("How much dough you have stored?");
let bankBalance = 9000;
let wallet = 3000;
let spendable = bankBalance + wallet;
let amount = 0;
let guitarsInCart = 0;
let ampsInCart = 0;

const calcTax = amount => {
  return amount * TAX_RATE;
};

const inDollars = amount => {
  return "$" + amount.toFixed(2);
};

//buy guitars while you got dough
while (amount < bankBalance) {
  amount = amount + GUITAR_PRICE;
  guitarsInCart++;
  //if below threshold buy an amp
  if (amount < SPENDING_THRESHOLD) {
    amount = amount + AMP_PRICE;
    ampsInCart++;
  }
}

//add the tax
amount = amount + calcTax(amount);

//final amount tnd receipr
console.log("VIC'S GUITAR ORDER");
console.log("/////////////////////////////////");
console.log("GUITARS: " + guitarsInCart, "x", inDollars(GUITAR_PRICE));
console.log("AMPS: " + ampsInCart, "x", inDollars(AMP_PRICE));
console.log("/////////////////////////////////");
console.log("wallet: ", inDollars(wallet));
console.log("bank: ", inDollars(bankBalance));
console.log("/////////////////////////////////");
console.log("total: ", inDollars(amount));
console.log("/////////////////////////////////");
console.log("spendable", inDollars(spendable));
console.log("/////////////////////////////////");

if (amount > spendable) {
  console.log("Can't afford this, man");
} else {
  console.log("Rock and roll, bruh!");
}
