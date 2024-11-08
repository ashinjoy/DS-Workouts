class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class binarySearchTree {
  constructor() {
    this.root = null;
  }
  isEmpty(){
    return this.root === null
  }
  insert(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.root = node
    } else {
     this._insertNode(this.root, node);
    }
  }
  _insertNode(root, node) {
    if (node.value < root.value) {
      if (root.left === null) {
        root.left = node;
      } else {
       return this._insertNode(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
       return this._insertNode(root.right, node);
      }
    }
  }
  search(root,value){
    if(root.value === value){
      console.log('Item found')
      return true
    }
    if(value < root.value ){
      return
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
const bst = new binarySearchTree()
bst.insert(5)
bst.insert(4)
bst.insert(6)
bst.insert(10)
bst.insert(1)
console.log(bst.search(14,bst.root))

