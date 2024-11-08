function findMax(arr) {
    let max = arr[0];
    for (let num of arr) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}


const arr = [3, 7, 1, 9, 4]
findMax(arr)