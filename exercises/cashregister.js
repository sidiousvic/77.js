const checkCashRegister = (price, cash, cid) => {
  // make an object of denominations and their values, from high to low
  let denoms = [
    { name: "ONE HUNDRED", val: 100 },
    { name: "TWENTY", val: 20 },
    { name: "TEN", val: 10 },
    { name: "FIVE", val: 5 },
    { name: "ONE", val: 1 },
    { name: "QUARTER", val: 0.25 },
    { name: "DIME", val: 0.1 },
    { name: "NICKEL", val: 0.05 },
    { name: "PENNY", val: 0.01 }
  ];

  // let change be cash minus price
  let change = cash - price;
  console.log("change " + change);

  // let output be an object with a status and a change array key.
  let output = { status: null, change: [] };

  // let reg be the total qty. of dollars in array
  const reg = cid
    // remove non-numbers from arrays
    .map(arr => arr.filter(x => typeof x == "number"))
    // flatten to single array of numbers
    .flat(1)
    // sum the numbers
    .reduce((a, b) => a + b);
  console.log("reg " + reg);

  // if reg is less than change, return output with INSUFFICIENT_FUNDS status and an empty array
  if (reg < change) {
    output.status = "INSUFFICIENT_FUNDS";
    output.change = [];
    return output;
  }

  // if reg is equal to change, return output with CLOSED status and cid array
  if (reg === change) {
    output.status = "CLOSED";
    output.change = cid;
    return output;
  }

  // make a register object from cid array
  var register = {};
  for (let x in cid) {
    let denom = cid[x][0];
    let val = cid[x][1];
    register[denom] = val;
  }
  console.log(JSON.stringify(register));
  // example {"PENNY":0.01,"NICKEL":0,"DIME":0,"QUARTER":0,"ONE":1,"FIVE":0,"TEN":0,"TWENTY":0,"ONE HUNDRED":0}

  // if reg is more than change, return OPEN and a change array in coins and bills, sorted high to low
  if (reg > change) {
    output.status = "OPEN";
    // loop through each type of bill/coin the denom array
    for (let billcoin in denoms) {
      let name = denoms[billcoin].name;
      let val = denoms[billcoin].val;
      // let value show total val of bills or coins used for change due
      let value = 0;
      // while we have a bill or coin and its value does not exceed change due
      while (register[name] > 0 && change >= val) {
        // correct for floating point precision
        change = Math.round(change * 100) / 100;
        // subtract val from change
        change -= val;
        // subtract val from register
        register[name] -= val;
        // add val to value
        value += val;
      }
      // if bill or coin was used we add it to change array in output
      if (value > 0) {
        output.change.push([name, value]);
      }
    }
  }

  // if we did not add to output change array or if we cannot give exact change return output with INSUFFICIENT_FUNDS status and an empty array
  if (output.change.length < 1 || change > 0) {
    output.status = "INSUFFICIENT_FUNDS";
    output.change = [];
  }
  return output;
};

// tests

console.log(
  JSON.stringify(
    checkCashRegister(19.5, 20, [
      ["PENNY", 1.01],
      ["NICKEL", 2.05],
      ["DIME", 3.1],
      ["QUARTER", 4.25],
      ["ONE", 90],
      ["FIVE", 55],
      ["TEN", 20],
      ["TWENTY", 60],
      ["ONE HUNDRED", 100]
    ])
  )
);

console.log(
  JSON.stringify(
    checkCashRegister(19.5, 20, [
      ["PENNY", 1.01],
      ["NICKEL", 2.05],
      ["DIME", 3.1],
      ["QUARTER", 4.25],
      ["ONE", 90],
      ["FIVE", 55],
      ["TEN", 20],
      ["TWENTY", 60],
      ["ONE HUNDRED", 100]
    ])
  )
);

console.log(
  JSON.stringify(
    checkCashRegister(3.26, 100, [
      ["PENNY", 1.01],
      ["NICKEL", 2.05],
      ["DIME", 3.1],
      ["QUARTER", 4.25],
      ["ONE", 90],
      ["FIVE", 55],
      ["TEN", 20],
      ["TWENTY", 60],
      ["ONE HUNDRED", 100]
    ])
  )
);

console.log(
  JSON.stringify(
    checkCashRegister(19.5, 20, [
      ["PENNY", 0.01],
      ["NICKEL", 0],
      ["DIME", 0],
      ["QUARTER", 0],
      ["ONE", 0],
      ["FIVE", 0],
      ["TEN", 0],
      ["TWENTY", 0],
      ["ONE HUNDRED", 0]
    ])
  )
);

console.log(
  JSON.stringify(
    checkCashRegister(19.5, 20, [
      ["PENNY", 0.01],
      ["NICKEL", 0],
      ["DIME", 0],
      ["QUARTER", 0],
      ["ONE", 1],
      ["FIVE", 0],
      ["TEN", 0],
      ["TWENTY", 0],
      ["ONE HUNDRED", 0]
    ])
  )
);

console.log(
  JSON.stringify(
    checkCashRegister(19.5, 20, [
      ["PENNY", 0.5],
      ["NICKEL", 0],
      ["DIME", 0],
      ["QUARTER", 0],
      ["ONE", 0],
      ["FIVE", 0],
      ["TEN", 0],
      ["TWENTY", 0],
      ["ONE HUNDRED", 0]
    ])
  )
);
