
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

/**Call function depending on what button the user pressed and what numbers they
 * pressed. */
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


/**Add event Listeners to buttons to call correct functions */
const buttons = document.querySelectorAll("button");
buttons.forEach(button=>button.addEventListener('click',(e)=>{
    populateDisplay(e.target.textContent);
}));

/**Change screen display with buttons that were pressed */
function populateDisplay(text){
    console.log(text);
    const screen = document.querySelector(".display");
    screen.textContent = text;

}
