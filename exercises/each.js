const each = (arr, callback) => {
  let result = [];
  for (let key in arr) {
    result.push(callback(arr[key]));
  }
  return result;
};

const timesTwo = num => {
  return num * 2;
};

console.log(each([1, 2, 3, 4, 5], timesTwo));
