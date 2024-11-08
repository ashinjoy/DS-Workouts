function sumArray(arr){
if(arr.length === 1) return arr[0]
return arr[arr.length-1] + sumArray(arr.slice(0,arr.length-1))
}
const sum = sumArray([1,2,3,4,5])
console.log(sum);
