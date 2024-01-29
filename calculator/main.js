let operands = document.querySelectorAll(".operand");
let operators = document.querySelectorAll(".operator");
let clearBtn = document.querySelector(".clear");
let displayScreen = document.querySelector(".display-screen");

let percentBtn = document.querySelector(".percent");

let signBtn = document.querySelector(".sign");

let decimalBtn = document.querySelector(".decimal");
let equalBtn = document.querySelector(".equal");

let firstNumber = "",
  operation = "",
  secondNumber = "",
  result;

operands.forEach((operand) => {
  operand.addEventListener("click", (el) => {
    if (operation === "") {
      firstNumber += el.target.innerText;
      displayScreen.innerText = firstNumber;
    } else {
      secondNumber += el.target.innerText;
      displayScreen.innerText = secondNumber;
    }
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", (el) => {
    if (operation === "") {
      operation = el.target.innerText;
    } else if (operation !== "" && firstNumber && secondNumber) {
      calculate(firstNumber, operation, secondNumber);
      operation = el.target.innerText;
    } else {
      operation = el.target.innerText;
    }
  });
});

clearBtn.addEventListener("click", (el) => {
  displayScreen.innerText = "";
  clearData();
});

function calculate(a, opSymbol, b) {
  switch (opSymbol) {
    case "+":
      add(a, b);
      break;
    case "-":
      subtract(a, b);
      break;
    case "x":
      multiply(a, b);
      break;
    case "/":
      divide(a, b);
      break;
  }
}

function add(a, b) {
  result = parseInt(a) + parseInt(b);

  firstNumber = result.toString();
  secondNumber = "";

  displayResults(result);
}

function multiply(a, b) {
  result = parseInt(a) * parseInt(b);
  firstNumber = result.toString();
  secondNumber = "";

  displayResults(result);
}

function subtract(a, b) {
  result = parseInt(a) - parseInt(b);
  firstNumber = result.toString();
  secondNumber = "";

  displayResults(result);
}

function divide(a, b) {
  result = parseInt(a) / parseInt(b);
  firstNumber = result.toString();
  secondNumber = "";

  displayResults(result);
}

function clearData() {
  firstNumber = "";
  secondNumber = "";
  operation = "";
}

function displayResults(result) {
  displayScreen.innerText = result;
}
