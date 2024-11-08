// Print all possible strings of length k that can be formed from a set of n characters

// set[] = {'a', 'b'}, k = 3

// Output:
// aaa
// aab
// aba
// abb
// baa
// bab
// bba
// bbb

function allPossibleStrings(set,k){
    let arr = []
    function helper(currentString){
        if(currentString.length === k) {
            arr.push(currentString)
            return 
            
        } 
        for(const char of set){
            helper(currentString+char)
        }
    }
    helper("")
    return arr
}
console.log(allPossibleStrings(['a','b'],3))
