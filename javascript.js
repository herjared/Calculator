
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
    if(secondNum === 0){
        clear();
        alert("You cant divide by 0 silly");
        return 0;
    }
    return firstNum / secondNum;
}

/**Call function depending on what button the user pressed and what numbers they
 * pressed. */
function operate (operator, firstNumber, secondNumber){
    let first = parseFloat(firstNumber);
    let second = parseFloat(secondNumber);
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
            clear();
            alert("Something went wrong...")
    }
}


/**Add event Listeners to buttons to call correct functions */
const buttons = document.querySelectorAll("button");
buttons.forEach(button=>button.addEventListener('click',(e)=>{
    checkInput(e);
}));

/**Create holders for all buttons inputs that way they can be used again or
 * saved for the current operation */
let firstHolder = [];
let operatorHolder = [];
let secondHolder = [];
let answerHolder = [];

/**Change screen display with buttons that were pressed */
function populateDisplay(arrayDisplay){
    let displayer = arrayDisplay.join("");
    const screen = document.querySelector(".display");
    screen.textContent =displayer;
}
 /**Check input from user and determine what to do with it */
function checkInput(input){

    /**if user clicks clear button it erases all saved data */
    if(input.target.className=== 'clear'){
        clear();
        return;
    }
    
    /**if user clicks equals and there exists a number in the secondHolder then
     * perform operation*/
    if(input.target.className == 'equals' && secondHolder.length >0){
        equals(operatorHolder, firstHolder,secondHolder);
        return;
    }

    /** If a number is pressed check if its a fresh calculation or a
     * continuation of a previous operation. If user clicks a number before an
     * operation has been assigned it will delete the previous answer. Start
     * creating firstHolder depending on answer.*/
    if(input.target.className == 'number' && operatorHolder.length === 0 && secondHolder.length ===0){
        if(answerHolder.length>0){
            answerHolder=[];
        }
        firstHolder.push(input.target.textContent);
        populateDisplay(firstHolder);
        return;
    }

    /**Once an operator is clicked check if there are two numbers ready to be
     * prepared for operation. If not delete previous operation and push in the
     * new one*/
    if(input.target.className == 'operator'){
        if(firstHolder.length>0 && secondHolder.length>0){
            equals(operatorHolder, firstHolder,secondHolder);
        }
        operatorHolder.pop();
        operatorHolder.push(input.target.textContent);
        return;
    }

    /**Checks if there is a number in the firstHolder. If not then use previous
     * answer as that number. Start creating second number depending on user
     * input */
    if(input.target.className == 'number' && operatorHolder.length > 0){
        if(firstHolder.length === 0){
            firstHolder = answerHolder;
        }
        secondHolder.push(input.target.textContent);
        populateDisplay(secondHolder);
        return;
    }

    if(input.target.className=== 'decimal'){
        decimalAdder();
        return;
    }
}

/**Equals prepares the strings for the incoming operation. After operation is
 * done display is updated and answer is saved while the rest of holders are
 * cleared for new inputs */
 function equals(operator,firstNum,secondNum){
    let numOne = firstNum.join('');
    let numTwo = secondNum.join('');
    let op = operator.join('');
    let answer = [operate(op,numOne,numTwo)];
    populateDisplay(answer);
    firstHolder=[];
    operatorHolder=[];
    secondHolder=[];
    answerHolder=answer;
 }

 /**Clears all data */
 function clear(){
    firstHolder = [];
    operatorHolder = [];
    secondHolder = [];
    answerHolder =[];
    populateDisplay(firstHolder)
    return;
 }
 /**Adds decimal to number being worked on. Checks to make sure there isn't
  * already a decimal added */
 function decimalAdder(){
    if(operatorHolder.length === 0 && secondHolder.length ===0){
        if(firstHolder.includes('.')){
            return;
        }else{
            firstHolder.push('.');
            populateDisplay(firstHolder);
        }
    }
    if(operatorHolder.length > 0){
        if(secondHolder.includes('.')){
            return;
        }else{
            secondHolder.push('.');
            populateDisplay(secondHolder);
        }
    }
 }