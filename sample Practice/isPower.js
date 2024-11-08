function isPower(num) {
  let power = 1;
  if (num < 1) {
    return false;
  } else if (num == 1) {
    return true;
  } else {
    for (i = 0; i < num / 2; i++) {
      power = 2 * power;
      if (num == power) {
        return true;
      }
    }
    return false;
  }
}
const result = isPower(4);
console.log(result);
