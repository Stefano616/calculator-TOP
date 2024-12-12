const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");
const keyboard = document.querySelector(".calculator-keyboard");

let operator = "";
let num1 = "";
let num2 = "";
let result = 0;

const add = (firstNum, secondNum) => firstNum + secondNum;
const subtract = (firstNum, secondNum) => firstNum - secondNum;
const divide = (firstNum, secondNum) => firstNum / secondNum;
const multiply = (firstNum, secondNum) => firstNum * secondNum;

const operate = (firstNum, secondNum, operationSign) => {
  switch (operationSign) {
    case "+":
      result = add(firstNum, secondNum);
      break;
    case "-":
      result = subtract(firstNum, secondNum);
      break;
    case ":":
      result = divide(firstNum, secondNum).toFixed(3);
      break;
    case "x":
      result = multiply(firstNum, secondNum);
      break;
    default:
      alert("Please enter valid numbers and select a valid operator");
  }
  num1 = result;
  num2 = "";
};

const reset = () => {
  operator = "";
  num1 = "";
  num2 = "";
  display.innerText = "0";
};

const deleteLastInput = () => {
  if (num2) {
    num2 = num2.slice(0, -1);
    display.innerText = num2;
  } else if (operator) {
    operator = operator.slice(0, -1);
    display.innerText = "0";
  } else if (num1) {
    num1 = num1.slice(0, -1);
    display.innerText = num1;
  } else {
    display.innerText = "0";
  }
};

keyboard.addEventListener("click", (e) => {
  if (e.target.value === "C") {
    reset();
  } else if (e.target.value === "DEL") {
    deleteLastInput();
  } else if (e.target.className === "operator-btn") {
    if (!operator) {
      operator = e.target.value;
      display.innerText = operator;
    } else {
      operate(Number(num1), Number(num2), operator);
      operator = e.target.value;
      display.innerText = `${result} ${operator}`;
    }
  } else if (e.target.value === "=") {
    operate(Number(num1), Number(num2), operator);
    operator = "";
    display.innerText = result;
  } else if (!operator) {
    num1 += e.target.value;
    display.innerText = num1;
  } else {
    num2 += e.target.value;
    display.innerText = num2;
  }
});
