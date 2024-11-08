class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
class linkedList {
  constructor() {
    this.head = this.tail = null;
  }
  isEmpty() {
    return this.head === null;
  }
  prepend(val) {
    let node = new Node(val);
    if (this.isEmpty()) {
      this.head = this.tail = node;
      return;
    }
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }
  append(val) {
    const node = new Node(val);
    if (this.isEmpty()) {
      this.head = this.tail = node;
      return;
    }
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }
  print() {
    let val = "";
    let curr = this.head;
    while (curr) {
      val += " " + curr.value;
      curr = curr.next;
    }
    return val;
  }
  removefromStart() {
    if (this.isEmpty()) {
      return;
    }
    this.head = this.head.next;
  }
  removefromEnd() {
    if (this.isEmpty()) {
      return;
    }
    this.tail = this.tail.prev;
    this.tail.next = null;
  }
  reverselinkedList() {
    let curr = this.head;
    let temp =null
    while (curr) {
       temp = curr.prev;
      curr.prev = curr.next;
      curr.next = temp;
      curr = curr.prev;

    }
    if (temp != null) {
        this.head = temp.prev;
    }
    // curr = this.head;
  }
}
const list = new linkedList();
list.append(1);
list.append(2);
list.append(3);
console.log(list.print());
list.reverselinkedList();
console.log(list.print());
