function checkCashRegister(price, cash, cid) {
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

  // change is cash minus price
  let change = cash - price;
  console.log(change);
  // output will be an object  with a status and a change key. change is an array
  let output = { status: null, change: [] };

  //flatten the cid array, filter numbers and return their sum
  //this is the total of dollars in register
  const reg = cid
    .map(arr => arr.filter(x => typeof x == "number"))
    .flat(1)
    .reduce((a, b) => a + b);

  console.log(JSON.stringify(reg));

  //WE HAVE A CHANGE QUANTITY.
  //WE HAVE A CID OBJECT.
  //WE HAVE TO SUBTRACT CHANGE TO EACH DENOM, STARTING AT HUNDREDS, WHILE CHANGE IS 0 OR MORE
  //IF CHANGE IS LESS THAN 0, WE MOVE ON TO NEXT DENOM AND START SUBTRACTING

  //if cid is less than change due, return INSUFFICIENT_FUNDS and []
  if (reg < change) {
    output.status = "INSUFFICIENT_FUNDS";
    output.change = [];
  }

  //if cid is equal to change due, return CLOSED and cid
  if (reg === change) {
    output.status = "CLOSED";
    output.change = cid;
  }

  let cidr = cid.reverse();
  // console.log(cidr);

  var register = {};

  //make a drawer object from cid
  for (let x in cid) {
    let denom = cid[x][0];
    let val = cid[x][1];
    register[denom] = val;
  }

  // console.log(JSON.stringify(register));
  change = Math.round(change * 100) / 100;

  if (reg > change) {
    output.status = "OPEN";
    for (let denom in denoms) {
      let name = denoms[denom].name;
      // console.log(name);
      let val = denoms[denom].val;
      // console.log(val)
      let value = 0;
      // console.log(register[name])

      while (register[name] > 0 && change >= val) {
        change -= val;
        register[name] -= val;
        value += val;
      }

      console.log(value);
      if (value > 0) {
        output.change.push([name, value]);
      }
    }
  }

  if (output.change.length < 1 || change > 0) {
    output.status = "INSUFFICIENT_FUNDS";
  }

  console.log(JSON.stringify(register));

  //else, return OPEN and cid in coins and bills from hi to lo

  return output;
}

// console.log(JSON.stringify(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])));

// console.log(JSON.stringify(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])));

// console.log(JSON.stringify(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])));

// console.log(JSON.stringify(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])));

// console.log(JSON.stringify(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])));

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
