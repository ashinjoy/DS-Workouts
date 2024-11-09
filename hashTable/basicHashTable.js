// +class HashTable{
//     constructor(size){
//         this.table = new Array(size)
//         this.size =size

//     }
//     hash(key){
//         let total = 0
//         for(let i=0;i<key.length;i++){
//             total +=key.charCodeAt(i)
//         }
//       return  total % this.size

//     }
//     set(key,value){
//         const index = this.hash(key)
//         this.table[index]=value
//     }
//     get(key){
//         const index = this.hash(key)
//         return this.table[index]
//     }
//     remove(key){
//         const index = this.hash(key)
//         this.table[index] = undefined

//     }
//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }

// }
// const hash = new HashTable(5)
// hash.set('in',"india")
// hash.set('fra',"france")
// hash.set('aus',"australia")
// hash.display()

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

    let bucket = this.table[index];

    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      let sameItem = bucket.find((el) => {
        return el[0] === key;
      });

      if (sameItem) {
        sameItem[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }
  get(key) {
    const index = this.hash(key);
    let bucket = this.table[index];
    if (bucket) {
      let sameItem = bucket.find((el) => el[0] === key);
      if (sameItem) {
        return sameItem[1];
      }
      return "no item";
    }
  }
  remove(key) {
    let index = this.hash(key);
    let bucket = this.table[index];
    if (bucket) {
      let itemIndex = bucket.findIndex((el) => el[0] === key);
      bucket.splice(itemIndex, 1);
    }
  }
  display() {
    for (let i = 0; i < this.table.length; i++) {
      // console.log(this.table.length);

      if (this.table[i]) {
        console.log(this.table[i]);
      }
    }
  }
}

const hashtable = new HashTable(5);
hashtable.set("ashin", "1910");
hashtable.set("asja", "ronaldo");
// console.log(hashtable.get("ashin"))
hashtable.set("ass", "kiran");
hashtable.remove("ashin");
hashtable.display();
