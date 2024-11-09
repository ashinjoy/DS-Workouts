class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.top = null;
  }
  isEmpty() {
    return this.top == null;
  }
  push(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.top = node;
      return;
    }
    node.next = this.top;
    this.top = node;
  }
  pop() {
    if (this.isEmpty()) {
      return -1;
    }
    const deleteNode = this.top;
    this.top = this.top.next;
    return deleteNode.value;
  }
  print() {
    let value = "";
    let curr = this.top;
    while (curr) {
      value += curr.value + " ";
      curr = curr.next;
    }
    return value;
  }
  reverseStack() {
    const reversedStack = new Stack();
    while (this.top) {
      reversedStack.push(this.pop());
    }
    console.log(reversedStack);
  }
}
const stack = new Stack();
stack.push("hi");
stack.push("h");
const data = stack.print();
console.log(data);

const result = stack.reverseStack();
console.log(result);
