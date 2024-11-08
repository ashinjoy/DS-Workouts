//fibonnaci recursion
// const fibonnaci = (num)=>{
//     if(num==1||num==0){
//         return num
//     }
//      fibonnaci(num-1)+ fibonnaci(n-2)
// }
// console.log(fibonnaci(3))

//fibonacci series iteration

// const iteration = (n) => {
// let t1= 0
// let t2= 1
// const arr =[0]
// for(i=2;i<=n;i++){
// let t3 = t1 + t2
// t1= t2
// arr.push(t1)
// t2 =t3
// }
// return arr
// };
// console.log(iteration(5))

//factorail of a number

// function factorial (n){
// if(n==1){
//     return 1
// }
// return n*factorial(n-1)
// }
// console.log(factorial(5))

//recursive factorial of a number

//Linear Search

// function LinearSearch(arr, target) {
//   let index;

//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] == target) index = i;
//   }
//   return index;
// }
// console.log(LinearSearch([1,2,3,4,3,21,2],2)
// )

// function binarySearch(arr,target) {
//     let leftIndex = 0
//     let rightIndex = arr.length-1
//     while (leftIndex!=rightIndex){
//     let middleIndex =  Math.floor((leftIndex+rightIndex)/2)

//         if(arr[middleIndex] ==  target){
//             return middleIndex
//         }
//         if(arr[middleIndex]<target){
//             leftIndex = middleIndex+1
//         }
//         if(arr[middleIndex]>target){
//             rightIndex = middleIndex-1
//         }
//     }

// }
// const arr=[1,2,3,4,5,6,7]
// console.log(binarySearch(arr,6))

//array Problems Largest 3 elements


