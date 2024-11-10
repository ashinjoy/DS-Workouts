// function isPalindrome(str) {
//     return str === str.split('').reverse().join('');
// }

// console.log(isPalindrome("amma"))

function substringCount(string,substring){
    let count = 0
for(let i=0;i<string.length;i++){
    if(substring[0] === string[i]){
        
      if ( string.substring(i,i+3) === substring){
          count++
      }
    }

}
return count

}

const string = "ababcabcabanbabcabc"
const substring = "abc"

const result = substringCount(string,substring)
console.log(result)