class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}
class linkedList {
  constructor() {
    this.head = this.tail = null;
  }
  isEmpty() {
    return this.head == null;
  }
  getSize(){
    let size = 0
    let curr = this.head
    while(curr){
        size++
        curr = curr.next
    }
    return size
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
  display() {
    let val = "";
    let curr = this.head;
    while (curr) {
      val += " " + curr.value;
      curr = curr.next;
    }
    console.log(val);
  }
  CountOccurence(data) {
    let curr = this.head;
    let count = 0;
    while (curr) {
      if (curr.value == data) {
        count++;
      }
      //   console.log(count)
      curr = curr.next;
    }
    return count;
  }
  deleteNode(data) {
    let curr = this.head;
    // console.log('size',this.getSize())
    if(this.head.value == data){
        // console.log('hi')
        this.head = this.tail = this.head.next
        return
    }
    
    while (curr.next.value != data) {
        curr =  curr.next
    }
    let removedNode=curr.next
    curr.next = removedNode.next
    removedNode.prev = curr
  }
}
const list = new linkedList();
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
list.append(7);


list.display();

list.deleteNode(6)
list.deleteNode(2)
list.deleteNode(7)


list.display();


// console.log(list.CountOccurence(2));
