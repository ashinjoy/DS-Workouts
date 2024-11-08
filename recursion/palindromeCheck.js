function palindromeCheck(str) {
  if(str.length <=1) return true
  if (str[str.length-1] !== str[0]) return false;
  return palindromeCheck(str.slice(1,-1));
}
console.log(palindromeCheck("my"))
