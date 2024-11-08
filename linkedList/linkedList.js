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
      return "linked list is empty";
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
    const node = new Node(value);
    let currPosition = 1;
    let current = this.head;
    if (this.isEmpty()) {
      return;
    }
    if (position === 1) {
      node.next = this.head;
      this.head = node;
      return;
    }

    while (currPosition && currPosition < position - 1) {
      current = current.next;
      currPosition++;
    }
    let temp = current.next;
    current.next = node;
    node.next = temp;
  }
  deletFromBegining() {
    if (this.isEmpty()) return;
    this.head = this.head.next;
    return;
  }
  deleteFromEnd() {
    if (this.isEmpty()) return;
    if (this.head.next === null) {
      this.head = null;
      return;
    }
    let current = this.head;
    while (current && current.next.next) {
      current = current.next;
    }
    current.next = null;
  }
  deleteFromPosition(pos) {
    if (this.isEmpty()) return;
    if (pos === 1) {
      this.deletFromBegining();
      return;
    }
    let currPos = 1;
    let current = this.head;
    while (current.next && currPos < pos - 1) {
      current = current.next;
      currPos++;
    }
    if (!current.next) return;
    current = current.next.next
  }
}

const linkedList = new LinkedList();

linkedList.prepend("zizou");
linkedList.prepend("kiran");
linkedList.prepend("shephin");
linkedList.prepend("ashin");
linkedList.deleteFromPosition(1);

const list = linkedList.print();
console.log(list);
