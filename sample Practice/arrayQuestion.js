// function Skip(arr) {
//   const resultArr = [];
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] % 5 == 0) {
//       resultArr[i] = arr[i];
//       i = i + 2;
//       continue;
//     } else {
//       resultArr[i] = arr[i];
//     }
//   }
//   return resultArr;
// }
// const answerArr = Skip([1, 2, 25, 64, 67, 5, 7]);
// console.log(answerArr);

//  function Skip(arr) {
//    const resultArr = [];
//    for (i = 0; i < arr.length; i++) {
//      if (arr[i] % 5 == 0) {
//        resultArr.push(arr[i]);
//        i = i + 2;
//        continue;
//      } else {
//        resultArr.push = arr[i];
//      }
//    }
//    return resultArr;
//  }
//  const answerArr = Skip([1, 2, 25, 64, 67, 5, 7]);
//  console.log(answerArr);
// console.log([1,2,3,'g',true])
// const obj={
// b:"b",
// a:"d",
// c:"10"
// }
// for(const key in obj){
//   console.log(`${key}:${obj[key]}`)
// }
// const obj={
//   a:10,
//   b:90,
//   c:7
// }
// console.log(obj['a'])
const arr=[1,2,3,4,5]
const arr1=arr.slice(1,3)
console.log(arr)

console.log(arr1)