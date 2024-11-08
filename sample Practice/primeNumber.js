function prime(n) {
  let count;

  if (n == 1) {
    return `${n} is not a Prime Number`;
  } else {
    for (let i = 2; i <= n / 2; i++) {
      if (n % i == 0) {
        count = 1;

        return `${n} is not a Prime Number`;
        break;
      } else {
        count = 0;
      }
    }
    if (count == 0) {
      return `${n} is a Prime Number`;
    }
  }
}
const result = prime(1);
console.log(result);
