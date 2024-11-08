function count(num){
if(num == 1){
    return 1
}
return (num-1)*count(num-1)
}
console.log(count(3))