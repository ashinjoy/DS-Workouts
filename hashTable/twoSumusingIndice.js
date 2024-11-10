
function sumIndex(num,target){
const hashTable = {}
for(let i=0;i<num.length;i++){
    const complement = target - num[i]
    if(hashTable.hasOwnProperty(complement)){
        return [hashTable[complement],i]
    }
    hashTable[num[i]] = i
}
}
console.log(sumIndex([1,2,3,4,5,6],6))
