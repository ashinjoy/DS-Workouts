class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class linkedListt {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  isempty() {
    return this.head === null;
  }
  prepend(value) {
    const node = new Node(value);
    if (this.isempty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.node = node;
    }
  }
  append(value) {
    const node = new Node(value);
    if (this.isempty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }
  removefromFront() {
    if (this.isempty()) {
      console.log("List is empty!");
    } else {
      const value = this.head.value;
      this.head = this.head.next;
      return value;
    }
  }

  removefromBack() {
    if (this.isempty()) {
      console.log("List is empty");
    } else if (this.size == 1) {
      const value = this.tail.value;

      this.head = null;
      this.tail = null;
      return value;
    } else {
      const value = this.tail.value;
      let prev = this.head;
      while (prev.next != this.tail) {
        prev = prev.next;

      }
      prev.next = null
      this.tail = prev
    }
  }
}
