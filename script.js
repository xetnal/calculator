const inputs = document.getElementById('inputs');
const number = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operators');
const clear = document.querySelector('.clear');
const result = document.getElementById('result');
const equals = document.getElementById('equals');
let firstValue = null;
let secondValue = null;



function pupulateDisplay(e){
  if (inputs.textContent === '0') {
    inputs.textContent = ' '
    inputs.textContent = e.target.textContent;
  }
  else if (inputs.textContent !== '0') {
    inputs.textContent += e.target.textContent;
  }
}

let operator;
function calculate(e) {
  firstValue = inputs.textContent;
  result.textContent = firstValue;
  inputs.textContent = " "
  
  if (e.target.id === 'divide') {
    operator = '/';
  }
  else if (e.target.id === 'multiply') {
    operator = '*';

  }
  else if (e.target.id === 'add') {
    operator = '+';
  }
  else if (e.target.id === 'substract') {
    operator = '-';
  }
  
}

//add listeners to the digits
number.forEach(item => {
  item.addEventListener("click", pupulateDisplay)
});

//add listeners to the operators
operators.forEach(item => {
  item.addEventListener("click", calculate)
});
//add listener to the equals key
equals.addEventListener('click', () => {
 solution = operate(operator, firstValue, inputs.textContent)
 result.textContent = firstValue + ' ' + operator + inputs.textContent;
 inputs.textContent = solution;
 
})


//create a clear button
clear.addEventListener('click', () => {
  inputs.innerHTML = "0"
  result.innerHTML = ""
  firstValue = 0

});
//basic math functions
function add(a, b) {
	return parseInt(a) + parseInt(b);
};
function substract(a, b) {
    return a - b;
      
  };
function multiply(a, b) {
  return a * b;
};
function divide(a,b) {
    return a / b;
};

//function for the = button. a is firstValue, b would be de inputs.textContent and operator is the...operator
function operate(operator, a , b) {   
    if (operator === '+') {
       return add(a, b);
    }
    else if (operator === '-') {
       return substract(a, b);
    }
    else if (operator === '*') {
       return multiply(a,b);
    }
    else if (operator === '/') {
      if (b === 0) {
        alert('Please dont break reality');
        return null
      } 
      else{
        return divide(a,b);
      }
      
    }
}