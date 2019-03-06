let ALBUMS = [];

const addAlbum = (name, tracks, releaseDate) => {
  ALBUMS.push({ name, tracks, releaseDate });
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
addAlbum(
  "SIDIOUS VIC",
  ["Necromantvla", "Hypervenom", "Blacksnake", "Shadows"],
  "2019"
);
addAlbum(
  "SIDIOUS VIC",
  ["Necromantvla", "Hypervenom", "Blacksnake", "Shadows"],
  "2019"
);

// console.log(ALBUMS);

let pluck = (arr, name) => {
  let result = [];
  for (let obj in arr) {
    result.push(arr[obj][name]);
  }
  return result;
};

console.log(pluck(ALBUMS, "name"));

const plucks = (arr, property) => {
  let result = [];
  for (let obj in arr) {
    result.push(arr[obj][property]);
  }
  return [...new Set(result)];
};

console.log(plucks(ALBUMS, "name"));
