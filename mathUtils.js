// function declaration
export function addition(
  /* DEFINING or DECLARING arguments goes here: generic names for input */

  /* we dont care what the user calls them when they "pass them in" */
  firstNumber,
  secondNumber
) {
  // firstNumber only exists in the function
  // SCOPE
  return Number(firstNumber) + Number(secondNumber);
}

export function subtraction(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}
