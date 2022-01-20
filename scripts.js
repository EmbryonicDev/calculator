let displayValue =""

// simple operators
function add(a, b) {
  let answer = a + b;
  return answer;
}

function subtract(a, b) {
  let answer = a - b;
  return answer;
}

function multiply(a, b) {
  let answer = a * b;
  return answer;
}

function devide(a, b) {
  let answer = a / b;
  return answer;
}

function operate(operator, num1, num2) {
  let answer =""
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

const buttons = document.querySelectorAll('button');
const display = document.querySelector("#display");

function clickButton () {
  for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
      if(buttons[i].classList.contains('operand')) {
        console.log("operand");
        display.innerText = buttons[i].value;
      } else if(buttons[i].classList.contains('clear')) {
        console.log("clear");
        display.innerText = buttons[i].value;
      } else if(buttons[i].classList.contains('sign')) {
        console.log("+/-");
        display.innerText = buttons[i].value;
      } else if(buttons[i].classList.contains('percent')) {
        console.log("%");
        display.innerText = buttons[i].value;
      } else if(buttons[i].classList.contains('operator')) {
        console.log("operator " + buttons[i].value);
        display.innerText = buttons[i].value;
      } else if(buttons[i].classList.contains('point')) {
        console.log("decimal");
        display.innerText = buttons[i].value;
      } else if(buttons[i].classList.contains('equal')) {
        console.log("equal");
        display.innerText = buttons[i].value;
      }
    })
  }
}
clickButton()
