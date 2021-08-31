//QUESTION 1

function factorial(num) {
  let factorialOfNumber = 1
  for (let i = 1; i <= num; i++) {
    factorialOfNumber = factorialOfNumber * i
  }
  return factorialOfNumber
}
