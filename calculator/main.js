let operands = document.querySelectorAll(".operand");
let operators = document.querySelectorAll(".operator");
let percentBtn = document.querySelector(".percent");
let clearBtn = document.querySelector(".clear");
let signBtn = document.querySelector(".sign");
let zeroBtn = document.querySelector(".zero");
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
    } else {
      secondNumber += el.target.innerText;
    }
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", (el) => {
    if (operation === "") {
      operation = el.target.innerText;
    } else if (operation !== "" && firstNumber) {
      operation = el.target.innerText;
      calculate(firstNumber, secondNumber, operation);
    }
  });
});

function calculate(a, b, opSymbol) {
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
  console.log(firstNumber, operation, secondNumber, result);
  firstNumber = result.toString();
  secondNumber = "";
  operation = "";
  console.log(firstNumber, operation, secondNumber);
}

function multiply(a, b) {
  result = parseInt(a) * parseInt(b);
  console.log(firstNumber, operation, secondNumber, result);
  firstNumber = result.toString();
  secondNumber = "";
  operation = "";
  console.log(firstNumber, operation, secondNumber);
}

function subtract(a, b) {
  result = parseInt(a) - parseInt(b);
  console.log(firstNumber, operation, secondNumber, result);
  firstNumber = result.toString();
  secondNumber = "";
  operation = "";
  console.log(firstNumber, operation, secondNumber);
}

function divide(a, b) {
  result = parseInt(a) / parseInt(b);
  console.log(firstNumber, operation, secondNumber, result);
  firstNumber = result.toString();
  secondNumber = "";
  operation = "";
  console.log(firstNumber, operation, secondNumber);
}
