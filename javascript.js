function add(firstNum, secondNum){
    return firstNum + secondNum;
}
function subtract(firstNum, secondNum){
    return firstNum - secondNum;
}
function multiply(firstNum,secondNum){
    return firstNum * secondNum;
}
function divide(firstNum,secondNum){
    return firstNum / secondNum;
}


function operate (operator, firstNumber, secondNumber){
    switch (operator){
        case 'add':
            return add(firstNumber,secondNumber);
        case 'subtract':
            return subtract(firstNumber,secondNumber);
        case 'multiply':
            return multiply(firstNumber,secondNumber);
        case 'divide':
            return divide(firstNumber, secondNumber);
        default:
            alert("Something went wrong...")
    }
}

console.log(operate('multiply', 1, 2));