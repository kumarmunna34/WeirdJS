//callback function
/**
 * In JavaScript, a callback function is a function that is passed as
 * an argument to another function and is executed within that other function.
 */
const a = 5,
  b = 6;
function calculator(operand, fun) {
  console.log(`${a} ${operand} ${b} = ${fun()}`);
}

calculator("+", function () {
  return a + b;
});
calculator("-", () => {
  return a - b;
});
calculator("*", () => a * b);
calculator("/", () => a / b);
calculator("%", () => a % b);

/* output:
    5 + 6 = 11
    5 - 6 = -1
    5 * 6 = 30
    5 / 6 = 0.8333333333333334
    5 % 6 = 5
*/
