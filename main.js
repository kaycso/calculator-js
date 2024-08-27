const historicDisplay = document.getElementById('historic')
const numberOnDisplay = document.getElementById('number-on-display')
let values = []
let operator;

// operações matemáticas
function sum(value1, value2) {
    return value1 + value2
}

function sub(value1, value2) {
    return value1 - value2
}

function mult(value1, value2) {
    return value1 * value2
}

function div(value1, value2) {
    return value1 / value2
}

// funções para interação
function addContentToDisplay(content) {
    if(Number(numberOnDisplay.textContent) !== 0 || content === ',') {
        numberOnDisplay.innerHTML += content
        return
    }
    
    numberOnDisplay.innerHTML = content
}

function saveNumber(content) {
    number = Number(numberOnDisplay.textContent)
    values.push(number)
    addContentToDisplay(content)
    if (content !== '=') {
        operator = content
    }
}

function toHistoric() {
    historicDisplay.textContent += numberOnDisplay.textContent
    numberOnDisplay.textContent = 0
}

function verifyOperation() {
    let result;
    console.log(operator, typeof operator)
    if (operator === '+') {
        result = sum(values[0], values[1])
    } else if (operator === '−') {
        result = sub(values[0], values[1])
    } else if (operator === '÷') {
        result = div(values[0], values[1])
    } else if (operator === '×') {
        result = mult(values[0], values[1])
    }

    addContentToDisplay(result)
}