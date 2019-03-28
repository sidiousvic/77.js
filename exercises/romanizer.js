function convertToRoman(num) {
  let nums = Array.from(num.toString());
  let dex = nums.reverse();
  let mul = 1;
  for (let int in nums) {
    nums[int] = nums[int] * mul;
    mul = mul * 10;
  }

  let dexed = dex.reverse().filter(x => x !== 0);
  console.log(dexed);

  let romans = {
    "1": "I",
    "2": "II",
    "3": "III",
    "4": "IV",
    "5": "V",
    "6": "VI",
    "7": "VII",
    "8": "VIII",
    "9": "IX",
    "10": "X",
    "20": "XX",
    "30": "XXX",
    "40": "XL",
    "50": "L",
    "60": "LX",
    "70": "LXX",
    "80": "LXXX",
    "90": "XC",
    "100": "C",
    "200": "CC",
    "300": "CCC",
    "400": "CD",
    "500": "D",
    "600": "DC",
    "700": "DCC",
    "800": "DCCC",
    "900": "CM",
    "1000": "M",
    "2000": "MM",
    "3000": "MMM"
  };

  return dexed.map(x => romans[x] || x).join("");
}

console.log(convertToRoman(9));
