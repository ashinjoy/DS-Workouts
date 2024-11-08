class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class linkedList {
  constructor() {
    this.head = null;
  }
  isEmpty() {
    return this.head == null;
  }
  prepend(val) {
    const node = new Node(val);
    if (this.isEmpty()) {
      this.head = node;
      return;
    }
    node.next = this.head;
    this.head = node;
  }
  append(val) {
    const node = new Node(val);
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = node;
  }
  display() {
    let val = "";
    let curr = this.head;
    while (curr) {
      //   console.log(curr.value);
      val += " " + curr.value;
      curr = curr.next;
    }
    return val;
  }
  isPrimeNumber(data) {
    for (let i = 2; i < data / 2; i++) {
      if (data % i == 0) {
        return false;
      }
    }
    return true;
  }

  primeDetail() {
    let curr = this.head;
    let value = "";

    while (curr) {
      let primeNumbers = this.isPrimeNumber(curr.value);
      //   console.log('prime',primeNumbers)
      if (primeNumbers) {
        value += " " + curr.value;
      }
      curr = curr.next;
    }
    return value;
  }
  largestElement() {
    let curr = this.head
    let maxValue = Number.MIN_VALUE
    while(curr){
        if(curr.value > maxValue){
            maxValue = curr.value
        }
        curr = curr.next
    }
    return maxValue
  }
  secondLargestElement(){
    let largest = Number.MIN_VALUE
    let secondLargest = Number.MIN_VALUE
    let curr = this.head
    
    while(curr){
        if(curr.value > largest){
            secondLargest = largest
            largest = curr.value

            // console.log('first',largest,secondLargest)
        }
        else if(curr.value > secondLargest){
            secondLargest = curr.value
        }
        curr = curr.next
    }

    return secondLargest

}
}


const list = new linkedList();
list.prepend(3);
list.prepend(5);
list.append(7);
list.append(8);
list.append(10);
list.append(24);

console.log(list.display());
console.log(list.primeDetail());
console.log(list.secondLargestElement())

