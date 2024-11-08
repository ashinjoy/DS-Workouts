class Node{
    constructor(value){
        this.value=value
        this.next = null
    }
}
class linkedList{
    constructor(){
        this.head = null

    }
    isempty(){
        return this.head == null
    }
    prepend(value){
        const node = new Node(value) 
        if(this.isempty()){
            this.head = node
        }
        node.next = this.head
        this.head = node
        
    }
    reverse(){
       if(this.isempty()){
        console.log("List is Empty!")
        return
       }
       else{
        let curr = this.head
        let prev = null

        while(curr){
        let next = curr.next
        curr.next = prev
        prev = curr
        curr =next

           
        }
        
       }
    }

    print(){
        if(this.isempty()){
            console.log('List is Empty!')
        }
        else{
            let curr =this.head
            let value = ''
            while(curr){
                value +=` ${curr.value}`
                curr = curr.next
                
            }
            console.log(value)
        }
    }
}
const link= new linkedList()
link.prepend(1)
link.prepend(2)
link.prepend(3)
link.prepend(4)
link.prepend(5)
link.reverse()
link.print()