function binarySearch(arr,target) {
    let leftIndex = 0
    let rightIndex = arr.length-1
    while (leftIndex!=rightIndex){
    let middleIndex =  Math.floor((leftIndex+rightIndex)/2)

        if(arr[middleIndex] ==  target){
            return middleIndex
        }
        if(arr[middleIndex]<target){
            leftIndex = middleIndex+1
        }
        if(arr[middleIndex]>target){
            rightIndex = middleIndex-1
        }
    }

}
const arr=[1,2,3,4,5,6,7]
console.log(binarySearch(arr,6))