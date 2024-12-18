

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
    this.top = this.top.next;
    this.length--;
    return;
  }
  isLength() {
    return this.length;
  }
  isPeek() {
    if (this.isEmpty()) return "no elements";
    return this.top.value;
  }
  print() {
    if(this.isEmpty()){
      console.log("Stack is Emppty");
      return
      
    }
    let value = "";
    let current = this.top;

    while (current) {
      value += current.value + " ";
      current = current.next;
    }
    return value
  }
}

const stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.pop()
console.log(stack.isPeek());
console.log(stack.isLength());


const  result = stack.print()
console.log(result);






