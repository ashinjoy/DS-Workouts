class Maxheap{
    constructor(){
        this.heap = []
    }
    isEmpty(){
        return this.heap.length ===0
    }
    parent(index){
        return Math.floor((index-1)/2)

    }
    leftChild(index){
        return (2*index)+1
    }
    rightChild(index){
        return (2*index)+2
    }
    insert(value){
        this.heap.push(value)
        this.heapifyUp(this.heap.length-1)
    }
    removeTop(){
        let root = this.heap [0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0)
    } 
    heapifyUp(index){
        let current = index
        let parent = this.parent(current)
        while(parent >= 0 && this.heap[parent] < this.heap[current]){
            [this.heap[current],this.heap[parent]]=[this.heap[parent],this.heap[current]]
            current = parent
            parent = this.parent(current)
        }

    }
    heapifyDown(index){
        let largest = index
        let left = this.leftChild(largest)
        let right =this.rightChild(largest)
        if(largest < this.heap.length && this.heap[left] > this.heap[largest]){
            largest = left
        }
        if(largest < this.heap.length && this.heap[right] > this.heap[largest]){
            largest = right
        }
        if(largest !== index){
            [this.heap[largest],this.heap[index]]=[this.heap[index],this.heap[largest]]
            this.heapifyDown(largest)
        }
    }

    display(){
        console.log(this.heap.join(' '))
    }
}
const heap =  new Maxheap()
heap.insert(5)
heap.insert(10)
heap.insert(15)
heap.insert(20)
heap.insert(18)
heap.removeTop()
heap.display()

