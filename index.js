const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function showResult() {
	span.innerText = firstNumber
}

const span = document.querySelector('span');
span.innerText = 0;

let firstNumber = 0;
let secondNumber;
let operator;