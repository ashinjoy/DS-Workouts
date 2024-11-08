class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class linkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isempty() {
    return this.head == null;
  }
  insert(value, index) {
    if (index < 0 || index > this.size) {
      console.log("Invalid Index!");
      return null;
    } else if (index == 0) {
      const node = new Node(value);
      if (this.isempty()) {
        this.head = node;
      } else {
        node.next = this.head;
        this.head = node;
      }
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
    }
    this.size++;
  }
  removefromIndex(index) {
    if (index < 0 || index > this.size) {
      console.log("Invalid Index!");
      return null;
    } else if (index == 0) {
      this.head = this.head.next;
    }
    else{
        let prev = this.head
        for(let i=0;i<index-1;i++){
            prev=prev.next
        }
        let remove=prev.next
        prev.next=remove.next

    }
    this.size--
  }
  print(){
    if(this.isempty()){
        console.log("List is Empty")
        return null
    }
    else{
        let prev=this.head
        let val=''
        while(prev){
            val+=`${prev.value}`
            prev=prev.next
        }
        console.log(val)
    }
  }
}

const link = new linkedList()
link.insert(1,0)
link.print()
link.insert(1,1)
link.insert(3,2)
link.insert(4,3)
link.removefromIndex(2)
link.print()
