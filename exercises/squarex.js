const squareX = num => {
  let row = 0; // counter for rows
  for (let x = 0; x <= num; x++) {
    // loop to create rows, console.log calls
    let star = [""]; // array to store line made of stars or spaces
    let column = 0; // counter for columns
    for (let y = 0; y <= num; y++) {
      // loop to create columns, star or space
      if (
        // conditions to push either a star or a space in each row
        column === 0 ||
        column === num ||
        row === 0 ||
        row === num ||
        row === column ||
        column === num - row
      ) {
        star.push("*");
      } else {
        star.push(" ");
      }
      column++; // every column loop, increase column counter
    }
    row++; // every row loop, increase row counter
    console.log(star.join("")); // print the row
  }
};

squareX(8);
squareX(20);
