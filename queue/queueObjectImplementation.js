class queue{
    constructor(){
        this.items={}
        this.rear=0
        this.front=0
}
enqueue(value){
    this.items[this.rear] = value
    this.rear++
    
}
dequeue(){
    const item = this.items[this.front]
    delete this.items[this.front]
    this.front++
    return item
}
isempty(){
    return this.rear-this.front === 0
}
peek(){
    return this.items[this.front]
}
size(){
    return this.rear -this.front
}
print(){
    console.log(this.items)
}

}

const q = new queue()
q.enqueue(5)
q.enqueue(6)
q.enqueue(7)
q.dequeue()
q.print()