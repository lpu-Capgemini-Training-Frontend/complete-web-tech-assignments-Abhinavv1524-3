// Find the factorial of a number using recursive function
function factorialOfNumber(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorialOfNumber(n - 1);
}

console.log(factorialOfNumber(5));
