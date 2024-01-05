let resizeBtn = document.querySelector(".btn--resize");
let sketchGrid = document.querySelector(".container");

function colorCell() {
  let cells = document.querySelectorAll(".cell");

  cells.forEach((cell) => {
    cell.addEventListener("mouseover", (e) => {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      e.target.style.backgroundColor = `#${randomColor}`;
    });
  });
}

resizeBtn.addEventListener("click", () => {
  let gridSize;

  gridSize = window.prompt("Enter a number between 1 to 100");

  createGrid(gridSize);
});

function buildInitialGrid() {
  let gridSize = 16;
  let numberOfCells = gridSize * gridSize;

  for (let i = 0; i < numberOfCells; i++) {
    let newCell = document.createElement("div");
    newCell.classList.add("cell");

    newCell.style.width = `calc(100% / ${gridSize})`;
    newCell.style.height = `calc(100% / ${gridSize})`;

    sketchGrid.appendChild(newCell);
  }

  colorCell();
}

function createGrid(gridSize) {
  let numberOfCells = gridSize * gridSize;
  console.log(numberOfCells);

  sketchGrid.innerHTML = "";

  for (let i = 0; i < numberOfCells; i++) {
    let newCell = document.createElement("div");
    newCell.classList.add("cell");

    newCell.style.width = `calc(100% / ${gridSize})`;
    newCell.style.height = `calc(100% / ${gridSize})`;

    sketchGrid.appendChild(newCell);
  }

  colorCell();
}

document.addEventListener("DOMContentLoaded", buildInitialGrid);
