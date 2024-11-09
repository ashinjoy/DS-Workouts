// class Node{
//     constructor(key,value){
//         this.key=key
//         this.value=value
//         this.next = null
//     }
// }
// class hashmap{
//     constructor(size){
//         this.table = new Array(size)
//         this.size = size
//     }
//     hash(key){
//         let total = 0
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(key[i])
//         }
//        return  total % this.size
//     }
//     set(key,value){
//         const index = this.hash(key)
//         const bucket=this.table[index]
//         const node = new Node(key,value)
//         if(!bucket){
//            this.table[index]=node
//         }else{
//             let curr =this.table[index]

//             while(curr.next){
//                 curr =curr.next
//                 if(curr.key === key){
//                     curr.value = value
//                 }
//             }
//             if(curr.key === key){
//                 curr.value=value
//             }else{
//                 curr.next = node
//             }
//         }
//     }
//     get(key){
//         const index = this.hash(key)
//         const bucket=this.table[index]
//         if(bucket){
//             let curr =this.table[index]
//             while(curr){

//                 if(curr.key === key){
//                     return curr.value
//                 }
//                 curr=curr.next
//             }
//         }
//         return undefined
//     }
//     remove(key){
//       const index =  this.hash(key)
//       const bucket=this.table[index]
//       if(bucket){

//           if(this.head[index].key === key){
//               this.head[index] = this.head[index].next
//           }else{
//               while(prev.next && prev.next.value!=value){
//               prev = prev.next
//           }
//          let remove = prev.next
//          prev.next =remove.next
//          return remove.value
//           }

//       }
//       return false
//     }
//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }

//     }
// }

// const hash = new hashmap(5)
// hash.set("name","Ashin")
// console.log(hash.get("name"))
// hash.display()

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }
  set(key, value) {
    let index = this.hash(key);
    // console.log(index);
    
    let bucket = this.table[index];
    const node = new Node(key,value);
    if (!bucket) {
      this.table[index] = node;
    } else {
      let current = this.table[index];
    //   console.log(current);
      
      while (current) {
        if (current.key === key) {
            console.log('hi');
            
          current.value = value;
          return;
        }
        current = current.next;
      }
      current.next = node;
    }
  }
  get(key) {
    let index = this.hash(key);
    let bucket = this.bucket[index];
    if (!bucket) {
      return;
    }
    let current = this.bucket[index];
    while (current && current.next) {
      if (current.key === key) {
        return current.value;
      }
      current = current.next;
    }
  }
  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(this.table[i]);
      }
    }
  }
}

const hashtable = new HashTable(5)
hashtable.set("boss","kiran")
hashtable.set("assistant","zizou")
hashtable.set("assistant","ziu")

hashtable.display()