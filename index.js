const divideBtn = document.getElementById('divide')
const multiplyBtn = document.getElementById('multiply')
const minusBtn = document.getElementById('minus')
const plusBtn = document.getElementById('plus')

const clearBtn = document.getElementById('clear')
clearBtn.addEventListener('click', clearScreen)

const equalBtn = document.getElementById('equal')
equalBtn.addEventListener('click', operate)

const add = (a, b) => a + b
const substract = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => a / b

const screen = document.querySelector('span');

function checkIfHasOperator() {
  if (
    screen.innerText.includes('+') ||
    screen.innerText.includes('-') ||
    screen.innerText.includes('*') ||
    screen.innerText.includes('÷')
  ) {
    return true
  }
  return false
}

const handleFirstNumber = (event) => {
  if (
    !checkIfHasOperator()
  ) {
    if (screen.innerText == '0') {
      screen.innerText = event.target.innerText
      firstNumber = event.target.innerText
    } else {
      screen.innerText += event.target.innerText
      firstNumber += event.target.innerText
    }
  }
}

const handleOperator = (event) => {
  if (!(screen.innerText[screen.innerText.length - 1] in operations)) {
    screen.innerText += event.target.innerText;
    operator = event.target.innerText
  }
}

const handleSecondNumber = (event) => {
  if (checkIfHasOperator) {
    // what if user inputs 0 at first
  }
};
const operators = document.querySelectorAll('.operator')
for (let operator of operators) {
  operator.addEventListener('click', handleOperator)
}

const operations = {
  '+': add,
  '-': substract,
  '*': multiply,
  '÷': divide,
}

function clearScreen() {
  screen.innerText = 0
}

const digits = document.querySelectorAll(".digit");
for (let digit of digits) {
  digit.addEventListener('click', handleFirstNumber)
}

function operate(num1, operator, num2) {
  // some operations
}

function showResult() {
  screen.innerText = firstNumber
}
// object of buttons and their event listeners



let firstNumber = 0
let secondNumber
let operator