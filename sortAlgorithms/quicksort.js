function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  const leftArr = [];
  const rightArr = [];
  for (i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    }
    if (arr[i] > pivot) {
      rightArr.push(arr[i]);
    }
  }
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}
const  result=quickSort([-6, 6, -1, 3, 4]);
console.log(result)
