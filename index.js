const add = (a, b) => a + b
const substract = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => a / b

const firstNumSpan = document.getElementById('operand1');
const operatorSpan = document.getElementById('operator');
const secondNumSpan = document.getElementById('operand2');

const digitsEventFirstNum = (event) => {
	if (firstNumSpan.innerText == '0') {
		firstNumSpan.innerText = event.target.innerText
	} else {
		firstNumSpan.innerText += event.target.innerText
	}
}

const addDigitsListenerForFirstNum = () => {
	const digitBtns = document.querySelectorAll('.digit');
	for (const digit of digitBtns) {
		digit.addEventListener('click', digitsEventFirstNum)
	}
};

addDigitsListenerForFirstNum()