class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.rear = this.front = null;
  }
  isEmpty() {
    return this.rear === null;
  }
  enqueue(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.rear = this.front = node;
      return;
    }
    this.rear.next = node;
    this.rear = node;
    return;
  }
  dequeue() {
    if (this.isEmpty()) {
      return -1;
    }
    this.front = this.front.next;
    return;
  }
  size() {
    let curr = this.head;
    let size = 0;
    while (curr) {
      size++;
      curr = curr.next;
    }
    return size;
  }
  print() {
    let value = "";
    let curr = this.front;
;

    while (curr) {

        
      value += curr.value + " ";
      curr = curr.next;
    }
    return value;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(3);
queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.dequeue()

const result = queue.print();
console.log(result);
