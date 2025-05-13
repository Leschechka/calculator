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


const resetBtn = document.getElementById('clear');
resetBtn.addEventListener('click', () => {
	firstNumSpan.innerText = '0';
	operatorSpan.innerText = '';
	secondNumSpan.innerText = '';
})


const equalBtn = document.getElementById('equal')
const operate = (num1, operator, num2) => {
	const intNum1 = +num1;
	const intNum2 = +num2;
	switch (operator) {
    case '+':
    return intNum1 + intNum2
    case '-':
    return intNum1 - intNum2
    case '×':
    return intNum1 * intNum2
    case '÷':
    return intNum1 / intNum2
  }
}

const updateNumbers = () => {
	if (firstNumSpan.innerText.length > 0 && operatorSpan.innerText.length > 0 && secondNumSpan.innerText.length > 0) {
		const result = operate(firstNumSpan.innerText, operatorSpan.innerText, secondNumSpan.innerText)
		firstNumSpan.innerText = result;
		secondNumSpan.innerText = '';
		operatorSpan.innerText = '';
	}
}

equalBtn.addEventListener('click', updateNumbers)

addDigitsListenerForFirstNum();
addOperatorsListener();
addDigitsListenerForSecondNum();