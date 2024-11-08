function maxHeap(arr){
let n = arr.length 
for( i = Math.floor((n/2)-1) ; i >= 0 ;i--){
maxHepify(arr,n,i)
}
return arr
}
function maxHepify(arr,n,index){
let largest = index
let leftChild = (2 * index) + 1
let rightChild = (2 * index) + 2
if(leftChild < n && arr[largest] < arr[leftChild]){
    largest = leftChild
}
if(rightChild < n && arr[largest] < arr[rightChild]){
    largest = rightChild
}
if(largest !== index){
   [arr[largest],arr[index]] = [arr[index],arr[largest]]
    maxHepify(arr,n,largest)
}

}

console.log(maxHeap([10,8,12,15,20,13,5,17]))