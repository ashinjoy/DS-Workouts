class hashTable {
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
    const index = this.hash(key);
    let bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      let itemKey = bucket.find((item) => item[0] === key);
      if (itemKey) {
        console.log("enterd");
        itemKey[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }  
  }
  get(key) {
    const index = this.hash(key);
    let bucket = this.table[index];
    if (bucket) {
      let itemKey = bucket.find((item) => item[0] === key);
      if (itemKey) {
        return itemKey[1];
      }
    }
    return undefined;
  }

  remove(key) {
    const index = this.hash(key);
    let bucket = this.table[index];
    if (bucket) {
      let itemKey = bucket.find((item) => item[0] === key);
      if (itemKey) {
        bucket.splice(bucket.indexOf(itemKey), 1);
      }
    }
  }
  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}
const hash = new hashTable(5);
hash.set("name", "ashin");
hash.set("name", "shephin");
hash.set("place", "angamaly");
// console.log(hash.get("place"))
hash.display();
