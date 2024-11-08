function fibonnaci(number) {
  const start = [];
  let lastNumber;
  for (i = 0; i < number; i++) {
    if (i == 0) {
      start.push(0);
    } else if (i == 1) {
      start.push(1);
    } else if(number > 2) {
      lastNumber = start[i - 2] + start[i - 1];
      start.push(lastNumber);
    }
    else{
        return "enter a valid number"
    }
  }
  return start;
}

const result = fibonnaci(5);
console.log(result);
