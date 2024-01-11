let operands = document.querySelectorAll(".operand");
let operators = document.querySelectorAll(".operators");
let percentBtn = document.querySelector(".percent");
let clearBtn = document.querySelector(".clear");
let signBtn = document.querySelector(".sign");
let zeroBtn = document.querySelector(".zero");
let decimalBtn = document.querySelector(".decimal");
let equalBtn = document.querySelector(".equal");

let firstNumber = "",
  operation = "",
  secondNumber = "";

operands.forEach((operand) => {
  operand.addEventListener("click", (el) => {
    firstNumber += el.target.innerText;
    console.log(firstNumber);
  });
});
