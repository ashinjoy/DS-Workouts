class Queue {
    constructor(){
        this.items = []
    }
    isempty(){  
       return this.items.length === 0
    }
    getSize(){
        return this.items.length
    }
    enqueue(value){
        this.items.push(value)
    }
    dequeue(value){
        this.items.shift(value)
    }
    peek(){
        return this.items[0]
    }
  
} 
const queue = new Queue
queue.enqueue(4)
queue.enqueue(5)

console.log(queue.peek())

