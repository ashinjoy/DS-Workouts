  class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class linkedList {
  constructor() {
    this.head = null;
  }
  getSize() {}
  prepend(value) {
    let node = new Node(value);
    if (this.head == null) {
      this.head = node;
      return;
    } else {
      node.next = this.head;
      this.head = node;
      return;
    }
  }
  append(value) {
    let node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
  }
  insert(index, val) {
    let node = new Node(val);
    let curr = this.head;
    for (let i = 0; i < index - 2; i++) {
      curr = curr.next;
    }
    node.next = curr.next;
    curr.next = node;
  }
  remove(value) {
    let curr = this.head;
    while (curr.next.value != value) {
      curr = curr.next;
    }
    const removedVal = curr.next;
    curr.next = removedVal.next;
  }
  removeindex(index) {
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    let remove = curr.next;
    curr.next = remove.next;
  }
  reverse() {
    let curr = this.head;
    let prev = null;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }
  print() {
    let curr = this.head;
    let value = "";
    while (curr) {
      value += " " + curr.value;
      curr = curr.next;
    }
    return value;
  }
}

const list = new linkedList();
list.prepend(4);
list.prepend(5);
list.prepend(6);
list.prepend(7);
list.append(10);
list.insert(2, 15);
// list.removeindex(1);
list.reverse();
console.log(list.print());
