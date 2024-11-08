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
  isempty() {
    return this.head === null;
  }
  getsize() {
    let count = 0;
    let curr = this.head;
    while (curr) {
      curr = curr.next;
      count++;
    }
    console.log(count);
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
  }
  print() {
    if (this.isempty()) {
      console.log("The list is empty");
    } else {
      let curr = this.head;
      let val= "";
      while (curr) {
        val += `${curr.value}`;
        curr = curr.next;

      }
      console.log(val)
    }
  }
}
const link = new linkedList()
link.append(5)
link.print()
link.append(6)
link.append(5)
link.append(7)
link.print()

