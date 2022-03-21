
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
    let first = parseInt(firstNumber);
    let second = parseInt(secondNumber);
    switch (operator){
        case '+':
            return add(first,second);
        case '-':
            return subtract(first,second);
        case 'x':
            return multiply(first,second);
        case '/':
            return divide(first, second);
        default:
            alert("Something went wrong...")
    }
}


/**Add event Listeners to buttons to call correct functions */
const buttons = document.querySelectorAll("button");
buttons.forEach(button=>button.addEventListener('click',(e)=>{
    checkInput(e);
}));

let array1 = [];
let array2 = [];
let array3 = [];
let array4 = [];

/**Change screen display with buttons that were pressed */
function populateDisplay(arrayDisplay){
    let displayer = arrayDisplay.join("");
    const screen = document.querySelector(".display");
    screen.textContent =displayer;
}
 /**Check input from user and determine what to do with it */
function checkInput(input){
    if(input.target.className=== 'clear'){
        array1 = [];
        array2 = [];
        array3 = [];
        array4 =[];
        populateDisplay(array1)
        return;
    }
    if(input.target.className == 'equals' && array3.length >0){
        equals(array2, array1,array3);
    }
    if(input.target.className == 'number' && array2.length === 0 && array3.length ===0){
        if(array4.length>0){
            array4=[];
        }
        array1.push(input.target.textContent);
        populateDisplay(array1);
        return;
    }
    if(input.target.className == 'operator'){
        if(array1.length>0 && array3.length){
            equals(array2, array1,array3);
        }
        array2.pop();
        array2.push(input.target.textContent);
        return;
    }
    if(input.target.className == 'number' && array2.length > 0){
        if(array1.length === 0){
            array1 = array4;
        }
        array3.push(input.target.textContent);
        populateDisplay(array3);
        return;
    }
}


 function equals(operator,firstNum,secondNum){
    let num1 = firstNum.join('');
    let num2 = secondNum.join('');
    let op = operator.join('');
    let answer = [operate(op,num1,num2)];
    populateDisplay(answer);
    array1=[];
    array2=[];
    array3=[];
    array4=answer;
 }