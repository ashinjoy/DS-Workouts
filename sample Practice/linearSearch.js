function linearSearch(arr,value){
for(i=0;i<arr.length;i++){
    if(arr[i]==value){
        return i
    }
}
return false

}
const result = linearSearch([1,2,3,5,6,7,9],-2)
console.log(result)

// const linearSearch =(arr,val)=>{
// if(arr.indexOf(val) == -1){
// return false
// }
// return arr.indexOf(val)

// }
// console.log(linearSearch([1,2,34,5,5],0))