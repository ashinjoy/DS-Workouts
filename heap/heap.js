class Heap{
    constructor(){
        this.heap = []
    }
    leftIndex(index){
        return (2*index)+1
    }
     rightIndex(index){
        return (2*index)+2
    }
     parentIndex(index){
        return Math.floor((index-1)/2)
    }
    swap(i1,i2){
        let temp = this.heap[i1]
        this.heap[i1]=this.heap[i2]
        this.heap[i2]=temp
    }
    heapifyUp(index){
        let currentIndex = index
        let parent = this.parentIndex(currentIndex)
        while(parent >= 0 && this.heap[parent] > this.heap[currentIndex]){
            this.swap(currentIndex,parent)
            currentIndex = parent
            parent = this.parentIndex(currentIndex)
            
        }
        
    }
    heapifyDown(index){
        let currentIndex = index
        let leftChild = this.leftIndex(currentIndex)
        let rightChild = this.rightIndex(currentIndex)
        let smallest = currentIndex
        if(currentIndex < this.heap.length && this.heap[smallest]<this.heap[leftChild]){
            smallest = leftChild
            
        }
         if(currentIndex < this.heap.length && this.heap[smallest]<this.heap[rightChild]){
            smallest = rightChild
            
        }
        if(currentIndex !== smallest){
            this.swap(currentIndex,smallest)
            this.heapifyDown(smallest)
            
        }
    }
    insert(value){
        this.heap.push(value)
        this.heapifyUp(this.heap.length-1)
    }
    deleteroot(){
        const root = this.heap[0]
        this.heap[0]=this.heap.pop()
        this.heapifyDown(0)
        
    }
    print(){
        console.log(this.heap)
    }
}
const h = new Heap()
h.insert(5)
h.insert(10)
h.insert(15)
h.insert(30)
h.insert(20)
h.insert(25)
h.insert(35)
h.deleteroot()
h.print()
