const buttons = document.querySelectorAll('button');
const display = document.querySelector("#display");
const detailDisplay = document.querySelector("#detailDisplay");
let tempValue = '';
let operator = '';
let num1 = '';
let storedOperator = '';
let equal = '';
let answer = '';
backspace = '';

window.addEventListener('keydown', function(e){
  const key = document.querySelector(`button[data-key='${e.keyCode}']`);
  key.click();
});

// simple operators

const add = (a, b) => answer = a + b;
const subtract = (a, b) => answer = a - b;
const multiply = (a, b) => answer = a * b;
const divide = (a, b) => answer = a / b;

function operate(operator, num1, tempValue) {
  if(operator == "+") {
    add(num1, tempValue);
  } else if(operator == "-") {
      subtract(num1, tempValue);
  } else if(operator == "*") {
      multiply(num1, tempValue);
  } else if(operator == "/") {
      divide(num1, tempValue);
  }  
  afterOperate();
}

function afterOperate() {
  if(answer > 999999999999) {
    answer = '';
    display.innerText = "Too Long!";
  } else if(answer % 1 != 0) {
    display.innerText = answer.toFixed(2);
    answer = parseFloat(display.innerText);
  } else {
    display.innerText = answer;
  }
  num1 = '';
  tempValue = answer;
  storedOperator = '';
}

function clickButton () {
  for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
      if(buttons[i].classList.contains('operand')) {
        if(answer != '') clear();
        tempValue += buttons[i].value;
        if(tempValue.length > 9) tempValue = tempValue.substring(0 , 9);
        compiler();
      } else if(buttons[i].classList.contains('operator')) {
        operator = buttons[i].value;
        compiler()
      } else if(buttons[i].classList.contains('point')) {
        tempValue += buttons[i].value;
        display.innerText = tempValue;
        disableDot();
      } else if(buttons[i].classList.contains('equal')) {
        equal = buttons[i].value;
        compiler();
      } else if(buttons[i].classList.contains('clear')) {
        clear()
      } else if(buttons[i].classList.contains('sign')) {
        tempValue = tempValue * -1;
        compiler()
      } else if(buttons[i].classList.contains('backSpace')) {
        tempValue = tempValue.toString();
        if(tempValue.length > 1) {
          tempValue = tempValue.slice(0, -1);
          compiler();
        } else {
          tempValue = 0;
          compiler();
        }
      }
    })
  }
}
clickButton()

function compiler() {
  (tempValue == '') ? tempValue == '' : tempValue = parseFloat(tempValue);;
  
  if(!tempValue == '' || tempValue == 0) {
    display.innerText = tempValue;
    disableDot()
  }
  
  if(operator)   {
    if(num1 != '' && tempValue != '')  {
      operate(storedOperator, num1, tempValue);
      num1 = answer;
      tempValue = '';
      storedOperator = operator;
      operator ='';
    } else {
      num1 = tempValue;
      storedOperator = operator;
      operator = '';
      tempValue = '';
    }
    answer ='';
  }
  
  if(equal) {
    if(storedOperator && num1 && tempValue != '') {
      operate(storedOperator, num1, tempValue);
      console.log('operated');
      disableDot();
    }
    if(tempValue != '' || num1 != '' || storedOperator != '') {
      tempValue = tempValue;
      num1 = num1;
    } 
    equal = '';
  }
  logAll()
}

function disableDot() {
  if(!display.innerText.includes('.')) {
    pointBtn.disabled = false;
  } else {
      pointBtn.disabled = true;
  }
}

function clear() {
  tempValue = '';
  detailDisplay.innerText = '';
  display.innerText = '';
  num1 = '';
  answer = '';
  operator = '';
  storedOperator = '';
  equal = '';
  disableDot()
}

function logAll() {
  console.log({tempValue});
  console.log({num1});
  console.log({answer});
  console.log({operator});
  console.log({storedOperator});
  console.log({equal});
  console.log('\n');
}
