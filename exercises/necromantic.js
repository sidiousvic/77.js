const Necromantize = str => {
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
};
console.log(
  Necromantize(
    "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z 0 1 2 3 4 5 6 7 8 9"
  )
);
// λ  Ց  ☾  ծ  ₹  ƒ  հ  ի  ꝇ  վ  Ӄ  Հ  Պ  𐊏  Φ  Ք  ¤  ᚱ  ϟ  ե  Ս  𝘝  ʬ  ×  ˠ  ʑ  ᠐  ۱  ༢  ੩  Վ  ཏ  𝟲  7  Ց  Ձ
console.log(Necromantize("This is a sentence in Necromantic."));
// եիꝇϟ  ꝇϟ  λ  ϟ₹𐊏ե₹𐊏☾₹  ꝇ𐊏  𐊏₹☾ᚱΦՊλ𐊏եꝇ☾.
console.log(Necromantize("Vic Sidious is a programmer and guitar player."));
// 𝘝ꝇ☾  ϟꝇծꝇΦՍϟ  ꝇϟ  λ  ՔᚱΦհᚱλՊՊ₹ᚱ  λ𐊏ծ  հՍꝇեλᚱ  ՔՀλˠ₹ᚱ.
console.log(Necromantize("Yutaka is very cute."));
// ˠՍեλӃλ  ꝇϟ  𝘝₹ᚱˠ  ☾Սե₹.
