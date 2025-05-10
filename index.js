const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function operate(num1, operator, num2) {
	
}

function showResult() {
	span.innerText = firstNumber
}

const nullBtn = document.getElementById('null');
const oneBtn = document.getElementById('one')
const twoBtn = document.getElementById('two')
const threeBtn = document.getElementById('three')
const fourBtn = document.getElementById('four')
const fiveBtn = document.getElementById('five')
const sixBtn = document.getElementById('six')
const sevenBtn = document.getElementById('seven')
const eightBtn = document.getElementById('eight')
const nineBtn = document.getElementById('nine')
const clearBtn = document.getElementById('clear')
const divideBtn = document.getElementById('divide')
const multiplyBtn = document.getElementById('multiply')
const minusBtn = document.getElementById('minus')
const plusBtn = document.getElementById('plus')
const equalBtn = document.getElementById('equal')
equalBtn.addEventListener('click', operate)

const span = document.querySelector('span');
span.innerText = 0;

let firstNumber = 0;
let secondNumber;
let operator;