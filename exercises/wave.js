const wave = str => {
  // create result variable
  let result = [];
  // loop as many times as str has characters
  for (let char in str) {
    // convert str into array
    let arr = str.split("");
    // splice to replace the iterated character loop with its uppercase equivalent
    arr.splice(char, 1, arr[char].toUpperCase());
    // push the whole array into result, stiched back together
    result.push(arr.join(""));
  }
  // return result after filtering all lowercase arrays
  // (result of pushing arrays with uppercased empty spaces)
  return result.filter(x => x != x.toLowerCase());
};

console.log(wave("pizza"));
// [ 'Pizza', 'pIzza', 'piZza', 'pizZa', 'pizzA' ]

console.log(wave("My guitar is black"));
// [ 'My guitar is black',
//   'MY guitar is black',
//   'My guitar is black',
//   'My Guitar is black',
//   'My gUitar is black',
//   'My guItar is black',
//   'My guiTar is black',
//   'My guitAr is black',
//   'My guitaR is black',
//   'My guitar is black',
//   'My guitar Is black',
//   'My guitar iS black',
//   'My guitar is black',
//   'My guitar is Black',
//   'My guitar is bLack',
//   'My guitar is blAck',
//   'My guitar is blaCk',
//   'My guitar is blacK' ]
