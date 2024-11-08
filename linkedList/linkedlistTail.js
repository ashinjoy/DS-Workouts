class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  isEmpty() {
    return this.head == null;
  }
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty) {
      this.head = this.tail = node;
      return;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }
  append(value) {
    const node = new Node(value);
    if (this.isEmpty) {
      this.head = node;
      return;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }
  removefromFront() {
    if (this.isEmpty) {
      return;
    } else {
      this.head = this.tail = this.head.next;
    }
  }
  removefromEnd() {
    if (this.isEmpty) {
      return;
    } else {
      let curr = this.head;
      while (curr.next != this.tail) {
        curr=curr.next
      }
      this.tail = curr
    }
  }
  
}
