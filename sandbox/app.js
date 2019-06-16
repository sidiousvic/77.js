let body = document.body;

body.addEventListener("mousemove", e => {
  console.log(`X: ${e.clientX}`, `Y: ${e.clientY}`);
});

document.body.style.backgroundColor = "black";
