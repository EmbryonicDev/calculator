const buttons = document.querySelectorAll('button');
const display = document.querySelector("#display");
let displayValue = '';
let operator = '';
let num1 = '';
let num2 = '';
let storedOperator = '';
let equal = '';
let answer = '';

// simple operators
function add(a, b) {
  answer = a + b;
  afterOperate();
}

function subtract(a, b) {
  answer = a - b;
  afterOperate();
}

function multiply(a, b) {
  answer = a * b;
  afterOperate();
}

function divide(a, b) {
  answer = a / b;
  afterOperate();
}

function afterOperate() {
  displayValue = answer;
  display.innerText = answer;
  logAll();
}


function operate(operator, num1, num2) {
  if(operator == "+") {
    add(num1, num2);
  } else if(operator == "-") {
      subtract(num1, num2);

  } else if(operator == "*") {
      multiply(num1, num2);

  } else if(operator == "/") {
      divide(num1, num2);

  }  
}

function clickButton () {
  for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
      if(buttons[i].classList.contains('operand')) {
        displayValue += buttons[i].value;
        // display.innerText = displayValue;
        compiler();
      } else if(buttons[i].classList.contains('clear')) {
        clear()
      } else if(buttons[i].classList.contains('sign')) {
        displayValue = displayValue * -1;
        display.innerText = displayValue;
      } else if(buttons[i].classList.contains('percent')) {
      } else if(buttons[i].classList.contains('operator')) {
        operator = buttons[i].value;
        compiler()
      } else if(buttons[i].classList.contains('point')) {
        displayValue += buttons[i].value;
        display.innerText = displayValue;
        if(!displayValue + 1) console.log("not a number");
        console.log("too many decimals");

      } else if(buttons[i].classList.contains('equal')) {
        equal = buttons[i].value;
        compiler();
      }
    })
  }
}
clickButton()

function compiler() {
  if(!displayValue == '') display.innerText = displayValue

  if(!operator == '')   {
    num1 = parseInt(displayValue);
    storedOperator = operator;
    operator = '';
    displayValue = '';
  }
  
  if(!equal == '') {
    num2 = parseInt(displayValue);
    displayValue = '';
    operate(storedOperator, num1, num2);
    equal = '';
  }
}

function clear() {
  display.innerText ='';
  displayValue = '';
  operator = '';
  storedOperator = '';
  num1 = '';
}

function logAll() {
  console.log({displayValue});
  console.log({operator});
  console.log({num1});
  console.log({num2});
  console.log({storedOperator});
  console.log({equal});
  console.log({answer});
}

