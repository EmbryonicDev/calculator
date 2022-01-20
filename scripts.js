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

console.log(operate('+', 5, 5));
console.log(operate("-", 20, 5));
console.log(operate("*", 20, 5));
console.log(operate("/", 20, 5));

// ------------------------
// console.log("add");
// console.log(add(9,9));

// console.log("subtract");
// console.log(subtract(19,9));

// console.log("multiply");
// console.log(multiply(9,9));

// console.log("devide");
// console.log(devide(27, 3));
// --------------------------
