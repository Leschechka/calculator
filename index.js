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
	if (event.target.innerText != '=') {
		if (secondNumSpan.innerText == '') {
			operatorSpan.innerText = event.target.innerText;
		}
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

const updateNumbers = (event) => {
	if (firstNumSpan.innerText.length > 0 && operatorSpan.innerText.length > 0 && secondNumSpan.innerText.length > 0) {
		const result = operate(firstNumSpan.innerText, operatorSpan.innerText, secondNumSpan.innerText)
		firstNumSpan.innerText = result;
		if (event.target.innerText == '=') {
			operatorSpan.innerText = '';
		} else {
			operatorSpan.innerText = event.target.innerText;
		}
		secondNumSpan.innerText = ''
	}
}

const addOperationsListener = () => {
	const operatorBtns = document.querySelectorAll('.operator');
	for (let operator of operatorBtns) {
		operator.addEventListener('click', updateNumbers)
	}
}

const undoBtn = document.getElementById('undo');
const undoChoice = () => {
	if (secondNumSpan.innerText.length > 0) {
		const string = secondNumSpan.innerText;
		secondNumSpan.innerText = string.slice(0, string.length - 1)
		return
	}

	if (operatorSpan.innerText.length > 0) {
		operatorSpan.innerText = ''
		return 
	}

	if (firstNumSpan.innerText.length > 1) {
		const string = firstNumSpan.innerText
    firstNumSpan.innerText = string.slice(0, string.length - 1)
    return
	} else if (firstNumSpan.innerText.length == 1) {
		firstNumSpan.innerText = '0'
    return 
	}
}

undoBtn.addEventListener('click', undoChoice)

addDigitsListenerForFirstNum();
addOperatorsListener();
addDigitsListenerForSecondNum();
addOperationsListener();