class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class linkedList {
  constructor() {
    this.head = null;
    this.size = 0
  }
  isempty() {
    return this.size === 0;
  }
  getsize() {
    return this.size;
  }
  prepend(value) {
    const node = new Node(value);
    if (this.isempty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++
  }
  print() {
    if (this.isempty()) {
      console.log("Empty String");
    } else {
      let curr = this.head;
      let store = "";
      while (curr) {
        store = `${curr.value}`;
        curr = curr.next;
      }
      console.log(store);
    }
  }
}

const link = new linkedList();
link.print();

link.prepend(5);
link.print();

link.prepend(6);
link.prepend(3);
link.prepend(2);
link.print();
