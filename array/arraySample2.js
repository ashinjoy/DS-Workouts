// Find all the duplicate elements
function duplicatesInArray(arr){
arr.sort((a,b)=>a-b)
const result=[]
for(i=0;i<arr.length;i++){
    if(arr[i]==arr[i+1]){
      result.push(arr[i])
        i++
        ;
    }
}
return result
}
console.log(duplicatesInArray([2,2,4,5,6,54,6,4]))
// console.log(result)
