const add = (a, b) => a + b
const substract = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => a / b

const operand1Span = document.getElementById('operand1');
const operatorSpan = document.getElementById('operator');
const operand2Span = document.getElementById('operand2');

let firstNumber = 0
let secondNumber
let operator
