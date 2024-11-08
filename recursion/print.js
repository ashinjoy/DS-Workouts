function print(num){
    if(num == 1) return num
    let store = ""
    return store + print(num-1) + " " + num

}
const printNumber = print(20)
console.log(printNumber);
