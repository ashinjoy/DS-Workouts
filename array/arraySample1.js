//  js function to clone an array
 function cloneArr(arr){
 const arr1 = [...arr]
 arr[0]=10
 console.log(arr1)
 console.log(arr)
 }
 cloneArr([1,2,33])

