// Create a Calucaltor that recieves multiple values and performs addition, subtraction, multiplication, division, modulus and concatination using high order and callback functions

function Calculator(value1, value2, callbackFunction) {
  return callbackFunction(value1, value2);
}

let val1 = 10;
let val2 = 15;

let additionResult = Calculator(val1, val2, (a, b) => a + b);

let subtractionResult = Calculator(val1, val2, (a, b) => a - b);

let multiplicationResult = Calculator(val1, val2, (a, b) => a * b);

let divisionresult = Calculator(val1, val2, (a, b) => a / b);

let modulusResult = Calculator(val1, val2, (a, b) => a % b);

let concatenationResult = Calculator(val1, val2, (a, b) => +a + +b);

console.log("Addition result: ", additionResult);
console.log("Subtraction result: ", subtractionResult);
console.log("Multiplication result: ", multiplicationResult);
console.log("Division result: ", divisionresult);
console.log("Modulus result: ", modulusResult);
console.log("Concatenation result: ", concatenationResult);
