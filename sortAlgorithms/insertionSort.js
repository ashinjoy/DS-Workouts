function insertionSort(arr) {
  for (i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i]
    j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
  return arr;
}
console.log(insertionSort([1, 2, 4, 6, 7, 3, 12]))
