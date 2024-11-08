class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isempty() {
    if (this.size == 0) {
      return true;
    }
  }
  getsize() {
    return this.size;
  }
}
const link = new LinkedList();
console.log(link.isempty());
console.log(link.getsize());
