function binaryrecursion(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, left, right) {
  if (left > right) {
    return -1;
  }

  let middleIndex = Math.floor((left + right) / 2);
  if (target === arr[middleIndex]) {
    return middleIndex;
  }
  if (target < arr[middleIndex]) {
    return search(arr, target, left, middleIndex - 1);
  } else {
    return search(arr, target, middleIndex + 1, right);
  }
}

console.log(binaryrecursion([1, 2, 3, 4, 5, 6, 7, 8], 7));
