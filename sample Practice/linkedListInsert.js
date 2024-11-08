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
    return this.head === null;
  }
  getSize() {
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
      console.log("No node present");
    } else {
      let curr = this.head;
      let val = "";
      while (curr) {
        val += ` ${curr.value}`;
        curr = curr.next;
      }
      console.log(val);
    }
  }
  append(value) {
    const node = new Node(value);
    if (this.isempty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }

      prev.next = node;
    }
    this.size++
  }
  insert(value, index) {
    if (index < 0 || this.size < index  ) {
      console.log("Invalid Index");
      return;
    } else if (index == 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next=prev.next
      prev.next=node

    }
    this.size++
  }
}
const link = new linkedList();
link.insert(5,0)
link.print();
link.insert(6,-1)
link.print();
link.insert(8,0)
link.insert(10,2)
link.insert(20,1)
link.print()
