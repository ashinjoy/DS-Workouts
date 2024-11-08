function cartesianProduct(arr1, arr2) {
  const result = [];
  for (i = 0; i < arr1.length; i++) {
    for (j = 0; j < arr2.length; j++) {
      result.push([arr1[i], arr2[j]]);
    }
  }
  return result
}
console.log(cartesianProduct([1,2,3,4],[1,3]))
