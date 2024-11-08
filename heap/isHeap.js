class heapNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
function isMaxHeap(root) {
  
  const queue = [root];

  while (queue.length !== 0) {
    const node = queue.shift();
    
    if (node.left) {
      if (node.left.value > node.value) {
        return false;
      }
      queue.push(node.left);
    }
    if (node.right) {
      if (node.right.value > node.value) {
        return false;
      }
      queue.push(node.right);
    }
  }
  return true;
  
}
const root = new heapNode(10);
root.left = new heapNode(20);
root.right = new heapNode(30);
root.left.left = new heapNode(4);
root.left.right = new heapNode(7);
root.right.left = new heapNode(45);
console.log(isMaxHeap(root));
