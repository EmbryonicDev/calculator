const buttons = document.querySelectorAll('button');
const display = document.querySelector("#display");
let displayValue = '';
let operator = '';
let num1 = '';
let num2 = '';
let storedOperator = '';
let equal = '';
let answer = 0;

// simple operators
function add(a, b) {
  answer = a + b;
  display.innerText = answer;
  console.log(answer);
}

function subtract(a, b) {
  answer = a - b;
  display.innerText = answer;
}

function multiply(a, b) {
  answer = a * b;
  display.innerText = answer;
}

function devide(a, b) {
  answer = a / b;
  display.innerText = answer;
}

function operate(operator, num1, num2) {
  if(operator == "+") {
    answer = add(num1, num2);
    return answer;
  } else if(operator == "-") {
    answer = subtract(num1, num2);
    return answer;
  } else if(operator == "*") {
    answer = multiply(num1, num2);
    return answer;
  } else if(operator == "/") {
    answer = devide(num1, num2);
    return answer;
  }  
}

function clickButton () {
  for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
      if(buttons[i].classList.contains('operand')) {
        console.log("operand");
        displayValue += buttons[i].value;
        // display.innerText = displayValue;
        compiler();
        console.log(displayValue);
      } else if(buttons[i].classList.contains('clear')) {
        console.log("clear");
        clear()
      } else if(buttons[i].classList.contains('sign')) {
        console.log("+/-");
        displayValue = displayValue * -1;
        display.innerText = displayValue;
      } else if(buttons[i].classList.contains('percent')) {
        console.log("%");
      } else if(buttons[i].classList.contains('operator')) {
        console.log("operator " + buttons[i].value);
        operator = buttons[i].value;
        compiler()
      } else if(buttons[i].classList.contains('point')) {
        console.log("decimal");
        displayValue += buttons[i].value;
        display.innerText = displayValue;
        if(!displayValue + 1) console.log("not a number");
        console.log("too many decimals");

      } else if(buttons[i].classList.contains('equal')) {
        console.log("equal");
        equal = buttons[i].value;
        compiler();
      }
    })
  }
}
clickButton()

function compiler() {
  if(!displayValue == '') display.innerText = displayValue
  console.log({displayValue})

  if(!operator == '')   {
    num1 = parseInt(displayValue);
    storedOperator = operator;
    operator = '';
    displayValue = '';
    console.log({num1});
    console.log({operator});
    console.log({storedOperator});
    console.log({displayValue});
  }
  
  if(!equal == '') {
    console.log("equal captured " + equal)
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

