const faces = {
  happy: ["◍•ᴗ•◍", "ᵘ ᵕ ᵘ ⁎", "❁‿❁"],
  sad: ["つ Д ｀", "v • v", "´；-；`"],
  angry: ["▼皿▼#", "ｏ`皿′ｏ", "＃ﾟДﾟ"]
};

const makeSmileys = arr => {
  const resultSmileys = arr.map(x => {
    return `(${x})`; //this uses a tempate literal
  });

  return resultSmileys;
};

const happySmileys = makeSmileys(faces.happy);
const sadSmileys = makeSmileys(faces.sad);
const angrySmileys = makeSmileys(faces.angry);

console.log(happySmileys[0], happySmileys[1], happySmileys[2]);
console.log(sadSmileys[0], sadSmileys[1], sadSmileys[2]);
console.log(angrySmileys[0], angrySmileys[1], angrySmileys[2]);
