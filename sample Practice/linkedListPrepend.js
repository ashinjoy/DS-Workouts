class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class linkedList {
  constructor() {
    this.head = null;
    this.size = 0;
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
     this.size++ ;
  }
}
const link = new linkedList();
console.log(link.prepend(5));
