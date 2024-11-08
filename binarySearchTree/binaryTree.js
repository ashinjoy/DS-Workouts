class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class binaryTree {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root === null;
  }
  insert(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.root = node;
    } else {
      const queue = [this.root];
      while (queue.length) {
        const newNode = queue.shift();
        if (!newNode.left) {
          newNode.left = node;
          return;
        } else {
          queue.push(newNode.left);
        }
        if (!newNode.right) {
          newNode.right = node;
          return;
        } else {
          queue.push(newNode.right);
        }
      }
    }
  }
  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
}
const bt = new binaryTree();
bt.insert(5);
bt.insert(10);
bt.insert(20);
bt.insert(30);
bt.insert(40);
bt.insert(50);
bt.preOrder(bt.root);
