var x = 7; // global scope, 7

const outer = () => {
  var x = 8; // outer() scope, 8
  const inner = () => {
    x++; // outer() scope, 9
    var x = 999;
    console.log(x); // inner scope, 999
  };
  inner();
};
outer();
