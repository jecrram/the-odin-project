let grid = document.querySelector(".container");
let gridBtn = document.querySelector(".grid-btn");

for (divCount = 0; divCount < 16; divCount++) {
  let el = document.createElement("div");
  grid.appendChild(el).className = "grid-item";
}

gridBtn.addEventListener("click", () => {
  let number;
  number = window.prompt("How many squares do you want to add?");
  console.log(number);
});
