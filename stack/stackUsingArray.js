
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
