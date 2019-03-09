let ALBUMS = [];

const addAlbum = (name, tracks, releaseYear) => {
  ALBUMS.push({ name, tracks, releaseYear });
};

addAlbum(
  "NEMESIS",
  ["Doomsayer", "Sectumsempra", "Xenomorph", "Shred 'Til You're Dead"],
  "2018"
);
addAlbum(
  "DEAD RIPPER",
  ["Dead Ripper", "Bash Your Brains (Don't Swing That Bat)"],
  "2018"
);
addAlbum("SIDIOUS VIC", ["Spoonful", "Tom Cat", "Blacksnake"], "2019");
addAlbum(
  "MARTIANECROPHAGY",
  ["Necromantvla", "Hypervenom", "Iggy and Oggy", "Deathdestroyer"],
  "2021"
);
addAlbum("X8", ["X8I", "X8II", "X8III", "X8IV"], "2025");
addAlbum("X8", ["X8I", "X8II", "X8III", "X8IV"], "2025");
addAlbum("X8", ["X8I", "X8II", "X8III", "X8IV"], "2025");
addAlbum("X8", ["X8I", "X8II", "X8III", "X8IV"], "2025");

// console.log(ALBUMS);

// returns all instances of property
let pluck = (arr, name) => {
  let result = [];
  for (let obj in arr) {
    result.push(arr[obj][name]);
  }
  return result;
};

const pluckUniques = (arr, property) => {
  let result = [];
  for (let obj in arr) {
    result.push(arr[obj][property]);
  }
  return [...new Set(result)];
};

//returns the average of all instances of property
let averageReleaseYear = arr => {
  let count = 1;
  let sum = pluck(arr, "releaseYear").reduce((a, b) => {
    count++;
    return parseInt(a) + parseInt(b);
  });
  return "The average release year is " + sum / count + " years.";
};

//returns the average of all unique instances of property
let averageUniqueReleaseYear = arr => {
  let count = 1;
  let sum = pluckUniques(arr, "releaseYear").reduce((a, b) => {
    count++;
    return parseInt(a) + parseInt(b);
  });
  return "The average unique release year is " + sum / count + " years.";
};

console.log(averageReleaseYear(ALBUMS));
console.log(averageUniqueReleaseYear(ALBUMS));
