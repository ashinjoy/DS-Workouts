
// class Stack{
//     constructor(){
//         this.items = []
//         this.size = 0
//     }
//     isEmpty(){
//         return this.items.length == 0
//     }
//     push(val){
//         this.items[this.size] = val
//         this.size+=1
//     }
//     pop(){
//         if (this.isEmpty()) {
//             return null;
//         } 
//         this.size -= 1;
//         const removeValue = this.items[this.size];
//         this.items.length = this.size; // Manually adjust the length of the array
//         return removeValue;

//     }
//     print(){
//         console.log(this.items.join(''))
//     }
//     reverse(str) {
//         const stac = new Stack();
//         for (let i = 0; i < str.length; i++) {
//             stac.push(str[i]);
//         }
//         let reversed = ''
//         while (!stac.isEmpty()) {
//             reversed += stac.pop()
//         }
//         return reversed;
// }
// }
// const stack = new Stack()
// console.log(stack.reverse('helloguys'))



