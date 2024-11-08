// function binarySearch(arr,val){
// const midPoint = arr[arr.length/2]
// if(midPoint<val){
//     for(i=arr.length/2;i<=arr.length;i<=i++){
//         if(arr[i] == val){
//             return i
//         }
//     }
// } else{
//     for(i=0;i<arr.length/2;i<=i++){
//         if(arr[i] == val){
//             return i
//         }
//     }
// }
// return -1
// }
// console.log(binarySearch([1,2,3,4,5,6],0))

function binarySearch(arr,target){
    let leftIndex=0
    let rightIndex=arr.length-1
    while(leftIndex<=rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex)/2)
        if(arr[middleIndex] == target){
            return middleIndex
        }
        if(arr[middleIndex] < target){
            leftIndex = middleIndex+1
        }
        if(arr[middleIndex] > target){
            rightIndex = middleIndex-1

        }
    }
    return -1
}

 console.log(binarySearch([1,2,3,4,5,6],3))
