const pyramid = width => {
  let floor = ["#"];
  for (let x = 0; floor.length <= width; floor.push("#")) {
    console.log(floor.join(""));
  }
};

pyramid(100);
