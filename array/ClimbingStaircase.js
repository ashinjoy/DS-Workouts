function climbingStaircase(num) {
  if (num <2) {
    return 1;
  }
  return (climbingStaircase(num - 1) + climbingStaircase(num - 2))
}
console.log(climbingStaircase(5))