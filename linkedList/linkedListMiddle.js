// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = this.prev = null;

//   }
// }
// class linkedList {
//   constructor() {
//     this.head = this.prev = null;
//     this.size = 0
//   }
//   isEmpty(){
//     return this.head == null
//   }
//   append(val){
//     const node = new Node(val)
//     if(this.isEmpty()){
//         this.head =this.tail = node

//     }else{
//         this.tail.next =  node
//         node.prev = this.tail
//         this.tail = node
//     }
//     this.size++

//   }
//   printMiddleElement(){
//     const middle = Math.floor(this.size/2)
//     let curr = this.head
//     for(let i=0;i<middle-1;i++){
//         curr = curr.next
//     }
//     return curr.next.value
//     }

// }

// const list = new linkedList()
// list.append(10)
// list.append(20)
// list.append(30)
// list.append(40)
// list.append(50)
// console.log(list.printMiddleElement())

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class linkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.head === null;
  }
  append(val) {
    const node = new Node(val);
    if (this.isEmpty()) {
      this.head = node;
      this.size += 1;
      return;
    }
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = node;
    this.size += 1;
  }
  middleElement() {
    let middle =Math.floor(this.size/2)
    console.log(this.size)
    console.log(middle)
    let curr = this.head
    for(let i=0;i<middle-1;i++){
        curr = curr.next
    }
    return curr.val
  }
  print() {
    let curr = this.head;
    let val = "";
    while (curr) {
      val += curr.val;
      curr = curr.next;
    }
    console.log(val);
  }
}
const list = new linkedList();
list.append(3);
list.append(2);
list.append(3);
list.append(4);
list.append(1);
list.print();
console.log(list.middleElement())
