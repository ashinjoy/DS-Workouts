function heapSort(arr) {
  let n = arr.length;
  for (i = Math.floor(n / 2 - 1); i >= 0; i--) {
    heapify(arr, n, i);
  }
  for (i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }
  return arr;
  // console.log(arr.join(' '))
}
function heapify(arr, n, index) {
  let largest = index;
  let leftChild = 2 * largest + 1;
  let rightChild = 2 * largest + 2;
  if (leftChild < n && arr[leftChild] > arr[largest]) {
    largest = leftChild;
  }
  if (rightChild < n && arr[rightChild] > arr[largest]) {
    largest = rightChild;
  }
  if (largest !== index) {
    [arr[largest], arr[index]] = [arr[index], arr[largest]];
    heapify(arr, n, largest);
  }
}
function print(arr) {
  console.log(arr.join(" "));
}
const arr = [2, 3, 4, 1, 45, 3, 12];
console.log(heapSort(arr));
// print(arr)
