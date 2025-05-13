const add = (a, b) => a + b
const substract = (a, b) => a - b
const multiply = (a, b) => a * b
const divide = (a, b) => a / b

const operators = {
	'+': add,
	'-': substract,
	'×': multiply,
	'÷': divide,
}

const firstNumSpan = document.getElementById('operand1');
const digitsEventFirstNum = (event) => {
	if (operatorSpan.innerText.length == 0) {
		if (firstNumSpan.innerText == '0') {
			firstNumSpan.innerText = event.target.innerText
		} else {
			firstNumSpan.innerText += event.target.innerText
		}
	}
}

const addDigitsListenerForFirstNum = () => {
	const digitBtns = document.querySelectorAll('.digit');
	for (const digit of digitBtns) {
		digit.addEventListener('click', digitsEventFirstNum)
	}
};


const operatorSpan = document.getElementById('operator');
const operatorsEvent = (event) => {
	if (secondNumSpan.innerText == '') {
		operatorSpan.innerText = event.target.innerText;
	}
}


const addOperatorsListener = () => {
	const operatorBtns = document.querySelectorAll('.operator');
	for (const operator of operatorBtns) {
		operator.addEventListener('click', operatorsEvent)
	}
}

const secondNumSpan = document.getElementById('operand2');
const digitsEventSecondNum = event => {
  if (operatorSpan.innerText.length == 1)
    if (secondNumSpan.innerText == '0') {
      secondNumSpan.innerText = event.target.innerText
    } else {
      secondNumSpan.innerText += event.target.innerText
    }
}

const addDigitsListenerForSecondNum = () => {
  const digitBtns = document.querySelectorAll('.digit')
  for (const digit of digitBtns) {
    digit.addEventListener('click', digitsEventSecondNum)
  }
};


addDigitsListenerForFirstNum();
addOperatorsListener();
addDigitsListenerForSecondNum();