const arr =[12,23,11,232,2,123,46,2]
function HeapSort(arr){
let n = arr.length
for(i=Math.floor(n/2)-1;i>=0;i--){
    heapify(arr,n,i)
}
for(i=n-1;i>0;i--){
    [arr[0],arr[i]]=[arr[i],arr[0]]
    heapify(arr,i,0)
}
 return arr.slice(3)
}
function heapify(arr,n,index){
    let largest =  index
    let leftChild =(2*index)+1
    let rightChild =(2*index)+2
if(leftChild < n && arr[largest] < arr[leftChild]){
    largest = leftChild
}
if(rightChild < n && arr[largest] < arr[rightChild]){
    largest = rightChild
}
if(largest !== index){
    [arr[largest],arr[index]] = [arr[index],arr[largest]]   
    heapify(arr,n,largest) 
}
}
console.log(HeapSort(arr,11))