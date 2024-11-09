// class CircularQueue {
//     constructor(capacity) {
//       this.items = new Array(capacity);
//       this.rear = -1;
//       this.front = -1;
//       this.currentLength = 0;
//       this.capacity = capacity;
//     }

//     isFull() {
//       return this.currentLength === this.capacity;
//     }

//     isEmpty() {
//       return this.currentLength === 0;
//     }

//     size() {
//       return this.currentLength;
//     }

//     enqueue(item) {
//       if (!this.isFull()) {
//         this.rear = (this.rear + 1) % this.capacity;
//         this.items[this.rear] = item;
//         this.currentLength += 1;
//         if (this.front === -1) {
//           this.front = this.rear;
//         }
//       }
//     }

//     dequeue() {
//       if (this.isEmpty()) {
//         return null;
//       }
//       const item = this.items[this.front];
//       this.items[this.front] = null;
//       this.front = (this.front + 1) % this.capacity;
//       this.currentLength -= 1;
//       if (this.isEmpty()) {
//         this.front = -1;
//         this.rear = -1;
//       }
//       return item;
//     }

//     peek() {
//       if (!this.isEmpty()) {
//         return this.items[this.front];
//       }
//       return null;
//     }

//     print() {
//       if (this.isEmpty()) {
//            this.front=0
//         console.log("Queue is empty");
//       }
//       else {
//         let i;
//         let str = "";
//         for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
//           str += this.items[i] + " ";
//         }
//         str += this.items[i];
//         console.log(str);
//       }
//     }
//   }
//   const cirq=new CircularQueue()
//   console.log(cirq.isFull())
//   cirq.enqueue(5)
//   cirq.enqueue(5)
//   cirq.enqueue(5)
//   console.log(cirq.size())
//   cirq.print

class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.capacity = capacity;
    this.currentLength = 0;
    this.rear = this.front = -1;
  }
  isEmpty() {
    return this.currentLength === 0;
  }
  isFull() {
    return this.capacity === this.currentLength;
  }
  enqueue(value) {
    if (this.isFull()) {
      console.log("hi");
      return;
    }
    this.rear = (this.rear + 1) % this.capacity;
    this.items[this.rear] = value;
    this.currentLength++;
    if (this.front == -1) {
      this.front = this.rear;
    }
  }
  dequeue() {
    if (this.isEmpty()) {
      return -1;
    }
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength--;
    return;
  }
  print() {
    let value = "";
    let i 
    for ( i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {

      value += this.items[i] + " ";
    }
    value+=this.items[i]
    return value;
  }
}

const circularQueue = new CircularQueue(5);
circularQueue.enqueue(1);
circularQueue.enqueue(2);
circularQueue.enqueue(3);
circularQueue.enqueue(4);
circularQueue.enqueue(5);
const result = circularQueue.print();

console.log(result);
