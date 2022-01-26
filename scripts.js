const buttons = document.querySelectorAll('button');
const display = document.querySelector("#display");
let tempValue = '';
let operator = '';
let num1 = '';
let storedOperator = '';
let equal = '';
let answer = '';
backspace = '';

window.addEventListener('keydown', function(e) {
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
  if(answer > 9999999999) {
    display.innerText = "Too Long";
  } else {
    answer = answer.toString();
    console.log(answer);
    answer = answer.substring(0, 12)
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
        if(tempValue.length > 10) tempValue = tempValue.substring(0 , 10);
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
      } else if(buttons[i].classList.contains('backspace')) {
        tempValue = tempValue.toString();
        if(tempValue.length > 1) {
          tempValue = tempValue.slice(0, -1);
          compiler();
        } else {
          tempValue = '';
          compiler();
        }
      }
    })
  }
}
clickButton()

function compiler() {
  (tempValue == '') ? tempValue == '' : tempValue = parseFloat(tempValue);
  
  if(!tempValue == '' || tempValue == 0) {
    display.innerText = tempValue;
    disableDot()
  }
  
  if(operator)   {
    checkDivide()
    if(num1 == '' && tempValue == '') {
      operator = '';
    } else if(num1 != '' && tempValue == '') {
      display.innerText = num1;
      storedOperator = operator;
      operator = '';
    } else if(num1 != '' && tempValue != '')  {
      display.innerText = tempValue;
      operate(storedOperator, num1, tempValue);
      num1 = answer;
      tempValue = '';
      storedOperator = operator;
      operator ='';
    } else if(tempValue !='' && num1 == '') {
      num1 = tempValue;
      storedOperator = operator;
      operator = '';
      tempValue = '';
    }
    answer = '';
  }
  
  if(equal) {
    checkDivide()
    if(num1 != '' && tempValue == '') {
      display.innerText = num1;
    } else if(storedOperator && num1 && tempValue != '') {
      operate(storedOperator, num1, tempValue);
      disableDot();
    } else if(tempValue != '' || num1 != '' || storedOperator != '') {
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

function checkDivide() {
  if(storedOperator == '/' && tempValue === 0) {
    clear();
    display.innerText = 'Funny Bunny!'
  }
}

function clear() {
  tempValue = '';
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
