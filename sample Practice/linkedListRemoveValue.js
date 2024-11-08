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
  getsize(){
    return this.size
  }
  prepend(value) {
    const node = new Node(value);
    console.log('prepend',node)
    if (this.isempty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  insert(value,index) {
    if (index < 0 || index > this.size) {
      console.log("Enter valid Index");
    } else if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
    }
    this.size++;
  }

  print() {
    if (this.isempty()) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      let value = "";
      while (curr) {
        value += `${curr.value}`;
        curr = curr.next;
      }
      console.log(value);
    }
  }
  removeValue(value) {
    if (this.isempty()) {
      console.log("List is Empty!");
      return null;
    } else if (this.head.value == value) {
      this.head = this.head.next;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value != value) {
        prev = prev.next;
      }
      if (prev.next) {
        let remove = prev.next;
        prev.next = remove.next;
        return remove;
      }
      return null;
    }
    this.size--;
  }
}
const link = new linkedList();
link.insert(1,0);
// console.log(link.getsize())
link.insert(3,1);
link.removeValue(1);
link.print();

