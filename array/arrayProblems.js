// function largestThree(arr) {
//     let largest;
//     let secondLargest;
//     let thirdLargest;
//     largest = secondLargest = thirdLargest = Number.MIN_VALUE;
//     for(i=0;i<arr.length;i++){
//       if(largest < arr[i]){
//           thirdLargest = secondLargest
//           secondLargest = largest
//           largest = arr[i]
//       }
//      else if(secondLargest < arr[i] ){
//           thirdLargest =  secondLargest
//           secondLargest =arr[i]
//       }
//      else if(thirdLargest < arr[i] ){
//           thirdLargest =arr[i]
//       }
//     }
//    return[largest,secondLargest,thirdLargest]
//   }
//   console.log(largestThree([12, 3, 4, 121, 6, 3, 56]));

// const secondLargestElement = (arr) => {
//     let largest
//     let secondLargest
//     largest =secondLargest =Number.MIN_VALUE
//     for(i=0;i<arr.length;i++){
//         if(largest<arr[i]){
//             secondLargest = largest
//             largest = arr[i]
//         }
//         else if(secondLargest<arr[i]){
//             secondLargest =arr[i]
//         }
//     }
//     return secondLargest
// }

//   console.log(secondLargestElement([12, 3, 4, 121, 6, 3, 56]));

const moveZerosEnd = (arr) => {
  for (i = arr.length-1; i >= 0; i--) {
    if (arr[i] == 0) {
      arr.splice(i,1)
      arr.push(0)
      
    }
  }
  return arr
};

const arr = [3, 5, 0, 0, 4]
console.log(moveZerosEnd(arr))
