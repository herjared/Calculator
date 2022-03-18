
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
        case '+':
            return add(firstNumber,secondNumber);
        case '-':
            return subtract(firstNumber,secondNumber);
        case 'x':
            return multiply(firstNumber,secondNumber);
        case '/':
            return divide(firstNumber, secondNumber);
        default:
            alert("Something went wrong...")
    }
}


/**Add event Listeners to buttons to call correct functions */
const buttons = document.querySelectorAll("button");
buttons.forEach(button=>button.addEventListener('click',(e)=>{
    checkInput(e);
}));

let array = [];

/**Change screen display with buttons that were pressed */
function populateDisplay(arrayDisplay){
    const screen = document.querySelector(".display");
    screen.textContent
}
 /**Check input from user and determine what to do with it */
function checkInput(input){
    if(input.target.className=== 'clear'){
        array =[];
        return;
    }
    if(array.length===3 && input.target.className === 'equals'){
        console.log(operate(array[1],array[0],array[2]));
    }else if(array.length ===0 && input.target.className !== 'operator'){
        array.push(input.target.textContent);
    }else if(array.length ===1 && input.target.className!=='number'){
        array.push(input.target.textContent);
    }else if(array.length ===2 && input.target.className !== 'operator'){
        array.push(input.target.textContent);
    }
    populateDisplay(array);
}