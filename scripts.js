const buttons = document.querySelectorAll('button');
const display = document.querySelector("#display");
const detailDisplay = document.querySelector("#detailDisplay");
let tempValue = '';
let operator = '';
let num1 = '';
let storedOperator = '';
let equal = '';
let answer = '';

window.addEventListener('keydown', function(e){
  const key = document.querySelector(`button[data-key='${e.keyCode}']`);
  key.click();
});

function afterOperate() {
  num1 = '';
  if(answer % 1 != 0) {
    display.innerText = answer.toFixed(2);
    answer = parseFloat(display.innerText);
  } else {
    display.innerText = answer;
  }
  tempValue = answer;
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
    // simple operators
  function add(a, b) {
    answer = a + b;
  }
  function subtract(a, b) {
    answer = a - b;
  }
  function multiply(a, b) {
    answer = a * b;
  }
  function divide(a, b) {
    answer = a / b;
  }
  afterOperate();
}

function clickButton () {
  for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
      if(buttons[i].classList.contains('operand')) {
        // if(tempValue != '' && answer != '') console.log("ping");
        tempValue += buttons[i].value;
        compiler();
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
        display.innerText = tempValue;
      } else if(buttons[i].classList.contains('percent')) {
        
      }
    })
  }
}
clickButton()

function compiler() {
  tempValue = parseFloat(tempValue);
  
  if(!tempValue == '' || tempValue == 0) {
    display.innerText = tempValue;
    disableDot()
  }
  
  if(!operator == '')   {
    
    if(num1 != '' && tempValue != '')  {
      operate(storedOperator, num1, tempValue);
      num1 = answer;
      // equal;
      tempValue = '';
      storedOperator = operator;
      operator ='';
      answer ='';
      // if(num1 != '' && tempValue == '') num1 == num1;
      
    } else {
      num1 = tempValue;
      storedOperator = operator;
      operator = '';
      tempValue = '';
    }
  }
  
  if(!equal == '') {
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
