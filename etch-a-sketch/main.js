let grid = document.querySelector(".container");
let gridBtn = document.querySelector(".grid-btn");

for (let divCount = 0; divCount < 16; divCount++) {
  let el = document.createElement("div");
  grid.appendChild(el).classList.add("flex-item");
}

let gridSquares = document.querySelectorAll(".flex-item");

// gridBtn.addEventListener("click", () => {
//   let number;
//   number = window.prompt("How many squares do you want to add?");
//   console.log(number);
// });

gridSquares.forEach((gridSquare) => {
  gridSquare.addEventListener("mouseover", (el) => {
    el.target.classList.toggle("flex-item--hover");
  });
});
