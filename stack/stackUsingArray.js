// class stack{
//     constructor(){
//         this.items=[]
//     }
//     isempty(){
//         return this.items.length === 0
//     }
//     push(value){
//         return this.items.push(value)
//     }
//     pop(value){
//         return this.items.pop()
//     }
//     size(){
//         return this.items.length
//     }
//     peek(){
//         return this.items[this.items.length-1]
//     }

// }
// const objStack = new stack()
// console.log(objStack.isempty())
// console.log(objStack.push(5))
// console.log(objStack.push(7))
// console.log(objStack.pop())
// console.log(objStack.peek())
// console.log(objStack.size())
// class stack{
//     constructor(size){
//         this.stack = []
//         this.size = size
//     }
//     isEmpty(){
//         return this.stack.length === 0
//     }
//     isFull(){
//         return this.size === this.stack.length
//     }
//     push(value){
//         if(this.isFull()){
//             console.log('Stack is Overflow! ')
//             return null
//         }else{
//             this.stack.push(value)
//         }
//     }
//     pop(){
//         if(this.isEmpty()){
//             console.log('Stack is Underflow!')
//             return null
//         }else{
//             this.stack.pop()
//         }
//     }
//     top(){
//         return this.stack[this.stack.length-1]
//     }
//     display(){
//         console.log(this.stack.toString())
//     }
// }
// const stacks = new stack()
// stacks.push(5)
// stacks.push(6)
// stacks.push(7)
// stacks.pop()
// console.log(stacks.top())
// console.log(stacks.isEmpty())
// console.log(stacks.isFull())
// stacks.display()

class Stack {
  constructor() {
    this.items = [];
    this.capacity = 5
  }
  push(value){
    this.items.push(value)
  }
  pop(){
    this.items.pop()
  }
  isempty(){
    return this.items.length == 0
  }
  isFull(){
    return this.items.length == this.capacity
  }
  peek(){
    return this.items[this.items.length-1]
  }
  print(){
   console.log(this.items.join(' ')) 
  }

}
const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.print()
