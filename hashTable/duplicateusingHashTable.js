function containsDuplicate(nums) {
    const hashMap = {};

    for (let i = 0; i < nums.length; i++) {
        if (hashMap[nums[i]] !== undefined) {
            return true; // Duplicate found
        }
        hashMap[nums[i]] = true;
     
    }
   console.log(hashMap)
    return false; // No duplicates found
}


const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 2, 3, 4, 5, 1];

console.log(containsDuplicate(array1)); // Output: false
// console.log(containsDuplicate(array2)); 