const buttons = document.querySelectorAll('button');
const display = document.querySelector("#display");
const detailDisplay = document.querySelector("#detailDisplay");
let tempValue = '';
let operator = '';
let num1 = '';
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
  tempValue = answer;
  // num1 = '',
  // display.innerText = answer;
  num1 = '';
  if(answer % 1 != 0) {
    display.innerText = answer.toFixed(3);
  } else {
    display.innerText = answer;
  }
}

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
}

function clickButton () {
  for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
      if(buttons[i].classList.contains('operand')) {
        (tempValue && answer != '') ? tempValue = buttons[i].value : tempValue += buttons[i].value;
        compiler();
      } else if(buttons[i].classList.contains('clear')) {
        clear()
      } else if(buttons[i].classList.contains('sign')) {
        tempValue = tempValue * -1;
        display.innerText = tempValue;
      } else if(buttons[i].classList.contains('percent')) {
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
      }
    })
  }
}
clickButton()

function compiler() {
  // if(tempValue.length > 6) tempValue = tempValue.slice(6, -1); // working on keeping display value limited
  tempValue = parseFloat(tempValue);
  
  if(!tempValue == '' || tempValue == 0) {
    display.innerText = tempValue;
    disableDot()
  }
  
  if(!operator == '')   {
    if(num1 != '' && tempValue != '')  {
      operate(storedOperator, num1, tempValue);
      num1 = answer;
      equal;
      tempValue = '';
      storedOperator = operator;
      operator ='';
      answer ='';
      detailDisplay.innerText = `${num1}${storedOperator}${tempValue}`;
    } else {
      num1 = tempValue;
      storedOperator = operator;
      operator = '';
      tempValue = '';
      detailDisplay.innerText = `${num1}${storedOperator}${tempValue}`;
    }
  }
  if(!equal == '') {
    detailDisplay.innerText += equal
    equal = '';
    operate(storedOperator, num1, tempValue);
    disableDot();
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
