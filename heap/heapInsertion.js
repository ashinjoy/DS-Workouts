class heap {
  constructor() {
    this.heap = [];
  }
  leftChild(i) {
    return 2 * i + 1;
  }
  rightChild(i) {
    return 2 * i + 2;
  }
  parent(index) {
    return Math.floor((index - 1) / 2);
  }
  insert(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }
  heapifyUp(index) {
    let currentElementIndex = index;
    let parentIndex = this.parent(currentElementIndex);
    while (
      currentElementIndex > 0 &&
      this.heap[currentElementIndex] > this.heap[parentIndex]
    ) {
      [this.heap[currentElementIndex], this.heap[parentIndex]] = [
        this.heap[parentIndex],
        this.heap[currentElementIndex],
      ];
      currentElementIndex = parentIndex;
      parentIndex = this.parent(currentElementIndex);
    }
  }
  delete() {
    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
  }
  heapifyDown(index) {
    let largest = index;
    let leftIndex = this.leftChild(index);
    let rightIndex = this.rightChild(index);
    if (this.heap[leftIndex] > this.heap[largest]) {
      largest = leftIndex;
    }
    if (this.heap[rightIndex] > this.heap[largest]) {
      largest = rightIndex;
    }
    if (largest !== index) {
      [this.heap[index], this.heap[largest]] = [
        this.heap[largest],
        this.heap[index],
      ];
      this.heapifyDown(largest);
    }
  }

  display() {
    console.log(this.heap.join(" "));
  }
}
const heaps = new heap();
heaps.insert(5);
heaps.insert(7);
heaps.insert(11);
heaps.insert(2);
heaps.insert(3);
heaps.insert(55);
heaps.insert(54);
heaps.insert(9);
heaps.delete();
heaps.display();
