class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  isEmpty() {
    if (!this.head) return true;
    else return false;
  }
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      return;
    }

    node.next = this.head;
    this.head = node;
    return;
  }
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
    return;
  }
  print() {
    let curr = this.head;
    let list = "";
    if (this.isEmpty()) {
      return;
    }
    while (curr) {
      list += curr.value + " ";
      curr = curr.next;
    }
    return list;
  }
  search(target) {
    if (this.isEmpty()) {
      return false;
    }
    let curr = this.head;
    let position = 1;
    while (curr) {
      if (curr.value === target) {
        return position;
      }
      curr = curr.next;
      position++;
    }
    return "no search item";
  }
  insertElement(position, value) {
    if (this.isEmpty()) {
      return;
    }
    const node = new Node(value);
    let currPosition = 1;
    let current = this.head;
    while (currPosition < position - 1) {
      current = current.next;
      currPosition++;
    }
    let temp = current.next;
    current.next = node;
    node.next = temp;
  }
}

const linkedList = new LinkedList();

linkedList.prepend("zizou");
linkedList.prepend("kiran");
linkedList.prepend("shephin");
linkedList.prepend("ashin");
linkedList.insertElement(5, "shainy");
const list = linkedList.print();
console.log(list);
