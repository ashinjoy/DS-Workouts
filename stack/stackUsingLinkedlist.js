// class  Node{
//     constructor(value){
// this.value=value
// this.next = null
//     }
// }
// class stacklist{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }
//     isempty(){
//         return this.head === null
//     }
//     getsize(){
//         return this.size
//     }
//     push(value){
//         const node = new Node(value)
//         if(this.isempty()){
//             this.head = node
//         }else{
//             node.next = this.head
//             this.head = node
//         }
//     }
//     pop(){
//         if(this.isempty()){
//             console.log('Stack is Empty!')
//             return null
//         }else{
//             let removedValue = this.head
//             this.head = this.head.next
//             return removedValue
//         }
//     }
//     peek(){
//         if(this.isempty()){
//             console.log('Stack is empty!')
//             return null
//         }else{
//             return this.head.value
//         }
//     }
//     print(){
//         let curr=this.head
//         let value=''
//        while (curr){
//            value += `${curr.value}`
//            curr = curr.next

//        }
//        console.log(value)
//     }

// }
// const stacks = new stacklist()
// stacks.push(5)
// stacks.push(6)
// stacks.push(7)
// stacks.push(8)
// stacks.push(9)

// stacks.pop()
// stacks.pop()
// console.log(stacks.peek())

// stacks.print()

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }
  isEmpty() {
    return this.top === null;
  }
  push(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.top = node;
      this.length++;
      return;
    }
    node.next = this.top;
    this.top = node;
    this.length++;
    return;
  }
  pop() {
    if (this.isEmpty()) {
      return -1;
    }
    this.top = this.top.next;
    this.length--;
    return;
  }
  isLength() {
    return this.length;
  }
  isPeek() {
    if (this.isEmpty()) return "no elements";
    return this.top.value;
  }
  print() {
    if(this.isEmpty()){
      console.log("Stack is Emppty");
      return
      
    }
    let value = "";
    let current = this.top;

    while (current) {
      value += current.value + " ";
      current = current.next;
    }
    return value
  }
}

const stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.pop()
console.log(stack.isPeek());
console.log(stack.isLength());


const  result = stack.print()
console.log(result);





