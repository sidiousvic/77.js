const score = dice => {
  // create an object with possible combos and their scores
  let scores = {
    "1x1": 100,
    "1x2": 200,
    "1x3": 1000,
    "1x4": 1100,
    "1x5": 1200,
    "6x3": 600,
    "6x4": 600,
    "6x5": 600,
    "5x1": 50,
    "5x2": 100,
    "5x3": 500,
    "5x4": 550,
    "5x5": 600,
    "4x3": 400,
    "4x4": 400,
    "4x5": 400,
    "3x3": 300,
    "3x4": 300,
    "3x5": 300,
    "2x3": 200,
    "2x4": 200,
    "2x5": 200
  };

  // sort the array
  let d = dice.sort();

  // store number appearances in a counts object
  let counts = {};
  d.forEach(x => (counts[x] = (counts[x] || 0) + 1));

  // encode the elements in counts into a combo code in the format NxN and push to
  let codes = [];
  for (let x in counts) {
    codes.push(x + "x" + codes[x]);
  }

  // map codes to the points in the scores object, filter worthless combos out, sum the points
  return codes
    .map(x => scores[x] || x)
    .filter(x => parseInt(x) == x)
    .reduce((a, b) => a + b, 0);
};
