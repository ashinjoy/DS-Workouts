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
  append(value) {
    const node = new Node(value);
    if (this.isempty()) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size ++
  }
  print() {
    if (this.isempty()) {
      console.log("List is Empty!");
    } else {
      let curr = this.head;
      let val = "";
      while (curr) {
        val += ` ${curr.value}`;
        curr=curr.next
      }
      console.log(val);
    }
  }
  search(value) {
    if (this.isempty()) {
      console.log("List is empty");
    } else {
      let prev = this.head;
      let i = 0;
      while (prev) {
        if (prev.value == value) {
          return i;
        }
        prev = prev.next;
        i++;
      }
      return 'No searched Element'
    }
  }
}

const link = new linkedList();
link.append(2);
link.append(3);
link.append(4);
console.log(link.search(8))
link.print();
