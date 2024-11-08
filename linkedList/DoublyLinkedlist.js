class Node {
  constructor(value) {
    this.value = value;
    this.next = this.prev = null;
  }
}
class DoublyLinkedList{
  constructor(){
    this.head = this.tail = null
  }
  isEmpty() {
    return this.head === null;
  }
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = this.tail = node;
      return;
    }
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = this.tail = node;
    }
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }
  print() {
    let list = "";
    let current = this.head;
    while (current) {
      list += current.value;
      current = current.next;
    }
    return list;
  }
  removeFromStart() {
    if (this.isEmpty()) return false;
    this.head = this.head.next;
  }
  removeFromEnd() {
    if (this.isEmpty()) return;
    this.tail = this.tail.prev;
  }
  deleteFromPosition(pos) {
    if (this.isEmpty()) return;
    if (pos === 1) {
      this.head = this.head.next;
      return;
    }
    let currPos = 1;
    let curr = this.head;
    while (curr.next && currPos < pos - 1) {
      curr = curr.next;
    }
    let deleteElement = curr.next
    curr.next = deleteElement.next
    deleteElement.prev = curr
  }
}

const doublyLinkedList = new DoublyLinkedList()

doublyLinkedList.append(1)
doublyLinkedList.append(2)
doublyLinkedList.append(3)
doublyLinkedList.append(4)
doublyLinkedList.append(5)
const list = doublyLinkedList.print()
console.log(list);


