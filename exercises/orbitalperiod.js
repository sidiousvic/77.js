const orbitalPeriod = arr => {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  let result = [];

  const orbitalPeriod = obj => {
    let T = Math.round(
      Math.PI * 2 * Math.sqrt(Math.pow(earthRadius + obj.avgAlt, 3) / GM)
    );
    obj.orbitalPeriod = T;
    delete obj.avgAlt;
    return obj;
  };

  for (let obj in arr) {
    result.push(orbitalPeriod(arr[obj]));
  }

  return arr;
};

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));
console.log(
  orbitalPeriod([
    { name: "iss", avgAlt: 413.6 },
    { name: "hubble", avgAlt: 556.7 },
    { name: "moon", avgAlt: 378632.553 }
  ])
);
