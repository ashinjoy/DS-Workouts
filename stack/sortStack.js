class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }
  isEmpty() {
    return this.top === null;
  }
  push(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.top = node;
      this.length++;
      return;
    }
    node.next = this.top;
    this.top = node;
    this.length++;
    return;
  }
  pop() {
    if (this.isEmpty()) {
      return -1;
    }
    let deleteNode = this.top;
    this.top = this.top.next;
    this.length--;
    return deleteNode.value;
  }
  isLength() {
    return this.length;
  }
  isPeek() {
    if (this.isEmpty()) return "no elements";
    return this.top.value;
  }
  print() {
    if (this.isEmpty()) {
      console.log("Stack is Emppty");
      return;
    }
    let value = "";
    let current = this.top;

    while (current) {
      value += current.value + " ";
      current = current.next;
    }
    return value;
  }
  sort() {
    if (this.isEmpty()) {
      return "stack is empty";
    }
    const sortedStack = new Stack();
    while (!this.isEmpty()) {
      const currentElement = this.pop();
      while (!sortedStack.isEmpty() && sortedStack.isPeek() < currentElement) {
        this.push(sortedStack.pop());
      }
      sortedStack.push(currentElement);
    }
    return sortedStack
  }
}

const stack = new Stack();
stack.push(1);
stack.push(10);
stack.push(11);
stack.push(3);
stack.push(4);
const se = stack.sort()
console.log(se.print())
// console.log(stack.print());
