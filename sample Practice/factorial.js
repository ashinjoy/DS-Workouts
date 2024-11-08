function factorial(n) {
  if (n == 0) {
    return 1;
  } else if (n > 0) {
    let factorial = 1;
    for (i = n; i >= 1; i--) {
      factorial = i * factorial;
    }
    return factorial;
  } else {
    return "Invalid Input!";
  }
}
const result = factorial(5);
console.log(result);
