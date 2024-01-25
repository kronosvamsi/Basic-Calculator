// console.log("hello world");

const calc_keys = document.querySelector(".calculator-keys");
const num_display = document.querySelector(".calculator-screen");

const clearBtn = document.querySelector(".all-clear");

function inputDisplay(digit) {
  num_display.value += digit;
}
function Calculation(expression) {
  if (expression.includes("+")) {
    var operands = expression.split("+");

    var firstOperand = parseInt(operands[0]);

    var secondOperand = parseInt(operands[1]);

    return firstOperand + secondOperand;
  } else if (expression.includes("-")) {
    var operands = expression.split("-");

    var firstOperand = parseInt(operands[0]);

    var secondOperand = parseInt(operands[1]);

    return firstOperand - secondOperand;
  } else if (expression.includes("*")) {
    var operands = expression.split("*");

    var firstOperand = parseInt(operands[0]);

    var secondOperand = parseInt(operands[1]);

    return firstOperand * secondOperand;
  } else if (expression.includes("/")) {
    var operands = expression.split("/");

    var firstOperand = parseInt(operands[0]);

    var secondOperand = parseInt(operands[1]);

    return firstOperand / secondOperand;
  }
}

for (let i = 0; i < calc_keys.children.length; i++) {
  calc_keys.children[i].addEventListener("click", () => {
    if (calc_keys.children[i].value !== "=") {
      inputDisplay(calc_keys.children[i].value);
    } else {
      let exp = num_display.value.split(" ");
      var val = Calculation(exp[0]);

      num_display.value = val;
      // console.log(num_display.value.split(" "));
    }
  });
}

clearBtn.addEventListener("click", () => {
  num_display.value = "";
});

// function inputDigit(digit) {
//   const { displayValue, waitingForSecondOperand } = calculator;

//   if (waitingForSecondOperand === true) {
//     calculator.displayValue = digit;
//     calculator.waitingForSecondOperand = false;
//   } else {
//     calculator.displayValue =
//       displayValue === "0" ? digit : displayValue + digit;
//   }
// }

// function inputDecimal(dot) {
//   if (calculator.waitingForSecondOperand === true) {
//     calculator.displayValue = "0.";
//     calculator.waitingForSecondOperand = false;
//     return;
//   }

//   if (!calculator.displayValue.includes(dot)) {
//     calculator.displayValue += dot;
//   }
// }

// function handleOperator(nextOperator) {
//   const { firstOperand, displayValue, operator } = calculator;
//   const inputValue = parseFloat(displayValue);

//   if (operator && calculator.waitingForSecondOperand) {
//     calculator.operator = nextOperator;
//     return;
//   }

//   if (firstOperand == null && !isNaN(inputValue)) {
//     calculator.firstOperand = inputValue;
//   } else if (operator) {
//     const result = calculate(firstOperand, inputValue, operator);

//     calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
//     calculator.firstOperand = result;
//   }
//   calculator.waitingForSecondOperand = true;
//   calculator.operator = nextOperator;
// }

// function calculate(firstOperand, secondOperand, operator) {
//   if (operator === "+") {
//     return firstOperand + secondOperand;
//   } else if (operator === "-") {
//     return firstOperand - secondOperand;
//   } else if (operator === "*") {
//     return firstOperand * secondOperand;
//   } else if (operator === "/") {
//     return firstOperand / secondOperand;
//   }

//   return secondOperand;
// }

// function resetCalculator() {
//   calculator.displayValue = "0";
//   calculator.firstOperand = null;
//   calculator.waitingForSecondOperand = false;
//   calculator.operator = null;
// }

// function updateDisplay() {
//   const display = document.querySelector(".calculator-screen");
//   display.value = calculator.displayValue;
// }

// updateDisplay();

// const keys = document.querySelector(".calculator-keys");

// keys.addEventListener("click", (event) => {
//   const { target } = event;
//   const { value } = target;
//   if (!target.matches("button")) {
//     return;
//   }

//   switch (value) {
//     case "+":
//     case "-":
//     case "*":
//     case "/":
//     case "=":
//       handleOperator(value);
//       s;
//       break;
//     case ".":
//       inputDecimal(value);
//       break;
//     case "all-clear":
//       resetCalculator();
//       break;
//     default:
//       if (Number.isInteger(parseFloat(value))) {
//         inputDigit(value);
//       }
//   }

//   updateDisplay();
// });
