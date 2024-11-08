// function bubbleSort(arr) {
//   let temp;
//   for (i = 0; i < arr.length; i++) {

//     for (j = 0; j < arr.length - 1; j++) {
//       if (arr[j] > arr[j + 1]) {

//         temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }

//   }
//   return arr
// }
// console.log(bubbleSort([-6,4,2,7,5,-9]))

// code Evolution Answer
// function bubbleSort(arr) {
//   let swapped
//   // let temp
//   do {
//     swapped  = false
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         [[arr[i]],[arr[i+1]]]=[[arr[i+1]],[arr[i]]]
//          swapped = true
//       }
//     }
//   } while (swapped)
//   return arr
// }
// console.log(bubbleSort([-6, 20, 8, -2, 4]));

// function bubbleSort(arr) {
//   let swapped;
//   do {
//     swapped = false
//     for (i = 0; i < arr.length - 1; i++) {
//       if(arr[i]>arr[i+1]){
//         [[arr[i]],[arr[i+1]]] = [[arr[i+1]],[arr[i]]]
//         swapped  = true

//       }
//     }
//   } while (swapped);
// }
// const arr = [2, 3, 4, 1, 9];
// bubbleSort(arr);
// console.log(arr)
// const obj = {
//   name: 9,
//   hdhh: 0,
// };
// const obj1 = {};
// for (const val in obj) {
//   obj1[val] = obj[val];
//   break;
// }
// console.log(obj1);

// console.log(hh[0])

// function insertionSort(arr) {
//   for (i = 1; i < arr.length; i++) {
//     let numberToInsert = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > numberToInsert) {
//       arr[j + 1] = arr[j];
//       j = j - 1;
//     }
//     arr[j + 1] = numberToInsert;
//   }
// }
// const arr = [12, 23, 4, 1, 3, 7];
// insertionSort(arr);
// console.log(arr);
// [{a:'name'},[{a:'b'},{b:'h'}]]


function mergeSort(arr){
if(arr.length == 1){
  return arr
}
const midleIndex = Math.floor(arr.length/2)
// console.log(midleIndex)
const leftArr = arr.slice(0,midleIndex)
const rightArr = arr.slice(midleIndex)

return merge(mergeSort(leftArr),mergeSort(rightArr))

}
function merge(left,right){
const sortedArr =[]
while(left.length && right.length){
  if(left[0]<=right[0]){
    sortedArr.push(left.shift())
  }else{
    sortedArr.push(right.shift())
  }
  

}
// console.log(sortedArr)
return[...sortedArr,...left,...right]
}   


// console.log(mergeSort([2,4,12,5,9,0]))

const arr = [12, 23, 4, 1, 3, 7];
console.log(mergeSort(arr))
console.log(arr)