// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//     this.prev = null;
//   }
// }

// class Stack {
//   constructor() {
//     this.head = this.tail = null;
//   }
//   isEmpty() {
//     return this.head == null;
//   }

//   push(val) {
//     const node = new Node(val);
//     if (this.isEmpty()) {
//       this.head = this.tail = node;
//       return;
//     }
//     this.tail.next = node;
//     node.prev = this.tail;
//     this.tail = node;
//   }
//   pop() {
//     if (this.isEmpty()) {
//       return false;
//     }
//     let removeValue = this.tail.val;
//     if (this.head == this.tail) {
//       this.head = this.tail = null;
//     } else {
//       this.tail = this.tail.prev;
//       this.tail.next = null;
//     }
//     return removeValue;
//   }
//   print() {
//     let curr = this.head;
//     let val = "";
//     while (curr) {
//       val += " " + curr.val;
//       curr = curr.next;
//     }
//     console.log(val);
//   }
//   insertBottom(stack, item) {
//     if (stack.isEmpty()) {
//       stack.push(item);
//     } else {
//       let temp = stack.pop();
//       this.insertBottom(stack, item);
//       stack.push(temp)
//     }
//     console.log(stack)
//   }
//   reverseStack(stack) {
//     if (!stack.isEmpty()) {
//       let temp = stack.pop();
//       this.reverseStack(stack);
//       this.insertBottom(stack, temp)
//     }
//   }
//   reverseString(string) {
//     const stack = new Stack();
//     for (let i = 0; i < string.length; i++) {
//         stack.push(string[i])
//     }
//     this.reverseStack(stack)
//     let reversed =''
//     while(!stack.isEmpty()){
//         reversed+=stack.pop()
//     }
//     return reversed
    
// }

   
  
// }
// const stack = new Stack()
// console.log(stack.reverseString('hello guys'))

class Stack{
    constructor(){
        this.items = []
        this.size = 0
    }
    isEmpty(){
        return this.items.length == 0
    }
    push(val){
        this.items[this.size] = val
        this.size+=1
    }
    pop(){
        if (this.isEmpty()) {
            return null;
        }
        this.size -= 1;
        const removeValue = this.items[this.size];
        this.items.length = this.size; // Manually adjust the length of the array
        return removeValue;

    }
    print(){
        console.log(this.items.join(''))
    }
    reverse(str) {
        const stac = new Stack();
        for (let i = 0; i < str.length; i++) {
            stac.push(str[i]);
        }
        let reversed = ''
        while (!stac.isEmpty()) {
            reversed += stac.pop()
        }
        return reversed;
}
}
const stack = new Stack()
console.log(stack.reverse('helloguys'))



