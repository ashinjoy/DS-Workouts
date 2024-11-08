function binarySearchRecursive(arr, target) {
console.log(arr,target)
    return Search(arr,target,0,arr.length)
}

function Search(arr, target, left, right) {
    // console.log(arr,target,left,right)
  if (left > right) {
    return -1;
  }
  let middleIndex = Math.floor((left + right) / 2);
//   console.log(middleIndex)
  if (arr[middleIndex] == target) {
    return middleIndex;
  }
  if (arr[middleIndex] > target) {
    return Search(arr, target,left, middleIndex - 1); 
  }
  if (arr[middleIndex] < target) {
   return  Search(arr, target, middleIndex+1, right);
  }
}

console.log(binarySearchRecursive([1,2,5,8,10,12],10))