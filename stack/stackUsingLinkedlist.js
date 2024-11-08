class  Node{
    constructor(value){
this.value=value
this.next = null
    }
}
class stacklist{
    constructor(){
        this.head = null
        this.size = 0
    }
    isempty(){
        return this.head === null
    }
    getsize(){
        return this.size
    }
    push(value){
        const node = new Node(value)
        if(this.isempty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
    }
    pop(){
        if(this.isempty()){
            console.log('Stack is Empty!')
            return null
        }else{
            let removedValue = this.head
            this.head = this.head.next
            return removedValue
        }
    }
    peek(){
        if(this.isempty()){
            console.log('Stack is empty!')
            return null
        }else{
            return this.head.value
        }
    }
    print(){
        let curr=this.head
        let value=''
       while (curr){
           value += `${curr.value}`
           curr = curr.next
           
       }
       console.log(value)
    }

}
const stacks = new stacklist()
stacks.push(5)
stacks.push(6)
stacks.push(7)
stacks.push(8)
stacks.push(9)

stacks.pop()
stacks.pop()
console.log(stacks.peek())

stacks.print()