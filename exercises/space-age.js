export { age };

const age = (planet, seconds) => {
  let secondsInAnEarthYear = 31557600;

  // how many Earth years
  let orbitalPeriods = {
    earth: 1,
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
  };

  // create and fill a new object with each planet's year in seconds
  let planetYearInSeconds = {};
  for (let body in orbitalPeriods) {
    planetYearInSeconds[body] = orbitalPeriods[body];
    planetYearInSeconds[body] *= secondsInAnEarthYear;
  }

  // "You are (9) (Neptune) years old."
  console.log(
    "You are " +
      +(seconds / planetYearInSeconds[planet]).toFixed(2) +
      " " +
      planet[0].toUpperCase() +
      planet.slice(1) +
      " years old."
  );

  // Divide age in seconds by planet year in seconds, fix to two decimal spaces and parse as number with '+()'.
  return +(seconds / planetYearInSeconds[planet]).toFixed(2);
};
