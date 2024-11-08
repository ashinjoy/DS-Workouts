class heap {
  constructor() {
    this.heap = [];
  }
  rightChild(index) {
    return (2*index) + 2;
  }
  leftChild(index) {
    return (2*index) + 1;
  }
  parent(index) {
    return Math.floor((index - 1) / 2);
  }
  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }
  heapifyUp(index) {
    let currentIndex = index;
    let parentIndex = this.parent(currentIndex);
    while (
      parentIndex >= 0 &&
      this.heap[parentIndex] < this.heap[currentIndex]
    ) {
      [this.heap[currentIndex], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[currentIndex],
      ];
      currentIndex = parentIndex;
      parentIndex = this.parent(currentIndex);
    }
  }
  removeroot() {
 
    let root = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1]
    this.heapifyDown(0);
  }
  heapifyDown(index) {
    let largest = index;
    let leftChild = this.leftChild(largest);
    let rightChild = this.rightChild(largest);

    if (
      leftChild < this.heap.length &&
      this.heap[largest] < this.heap[leftChild]
    ) {
      largest = leftChild;
    }
    if (
      rightChild < this.heap.length &&
      this.heap[largest] < this.heap[rightChild]
    ) {
      largest = rightChild;
    }
    if (largest !== index) {
      [this.heap[largest], this.heap[index]] = [
        this.heap[index],
        this.heap[largest],
      ];
    this.heapifyDown(largest);
    }

  }
 
  display() {
    console.log(this.heap.join(" "));
  }
}
const maxheap = new heap();
maxheap.insert(10);
maxheap.insert(8);
maxheap.insert(12);
maxheap.insert(15);
maxheap.insert(20);
maxheap.insert(13);
maxheap.insert(5);
maxheap.insert(17);
maxheap.removeroot()
maxheap.display();
