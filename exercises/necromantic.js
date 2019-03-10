function Necromantize(str) {
  let Necromantic = {
    A: "λ",
    B: "Ց",
    C: "☾",
    D: "ծ",
    E: "₹",
    F: "ƒ",
    G: "հ",
    H: "ի",
    I: "ꝇ",
    J: "վ",
    K: "Ӄ",
    L: "Հ",
    M: "Պ",
    N: "𐊏",
    O: "Φ",
    P: "Ք",
    Q: "¤",
    R: "ᚱ",
    S: "ϟ",
    T: "ե",
    U: "Ս",
    V: "𝘝",
    W: "ʬ",
    X: "×",
    Y: "ˠ",
    Z: "ʑ",
    "0": "᠐",
    "1": "۱",
    "2": "༢",
    "3": "੩",
    "4": "Վ",
    "5": "ཏ",
    "6": "𝟲",
    "7": "",
    "8": "Ց",
    "9": "Ձ",
    ",": "、",
    " ": "\xa0\xa0"
  };

  return str
    .toUpperCase()
    .split("")
    .map(x => Necromantic[x] || x)
    .join("");
}

console.log(Necromantize("This is a sentence in Necromantic."));
console.log(Necromantize("The quick "));
console.log(Necromantize("ABCDEFGHIJKLMNOPQRSTUVWXYZ"));
console.log(Necromantize("Vic Sidious is a programmer and guitar player."));
console.log(Necromantize("Yutaka is very cute."));
console.log(
  Necromantize(
    "ՍϞꝆ𐊏Հ  ՊΛՔ()、  ☾ᚱ₹ΛԵ₹Ծ  Λ  ՔᚱΦՀᚱΛՊ  ԵԻΛԵ  ԵᚱΛ𐊏ϞՀꝆԵ₹ᚱΛԵ₹Ϟ  ΛՀՔԻΛՑ₹ԵꝆ☾  ϞԵᚱꝆ𐊏ՀϞ  Ꝇ𐊏ԵΦ  𐊏₹☾ᚱΦՊΛ𐊏ԵꝆ☾、  Λ𐊏  Ս𐊏ᚱ₹ΛԾΛՑՀ₹  ՔꝆՀ₹  ΦƑ  ϞԻꝆԵ."
  )
);

console.log(Necromantize("ϟՍ𐊏 10 Պλᚱ 2019"));
