function fibonacci(n){
    if(n-1===1 || n-1===0) return (n-1)
    return fibonacci(n- 1) + fibonacci(n-2)

}

console.log(fibonacci(5))



// fibonacci sequence = 0 1 1 2 3 5