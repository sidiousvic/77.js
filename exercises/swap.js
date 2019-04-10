const swap = object => {
  let result = {};
  for (let elem in object) {
    let key = elem;
    let value = object[elem];
    result[key] = value;
  }
  return result;
};

console.log(swap({ a: 1, b: 2, c: 3, d: 4 }));
