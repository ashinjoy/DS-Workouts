function LinearSearch(arr, target) {
  let index;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] == target) index = i;
  }
  return index;
}
console.log(LinearSearch([1,2,3,4,3,21,2],2)
)