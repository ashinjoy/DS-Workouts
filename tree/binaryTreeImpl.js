class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
  insertNode(value) {
    const node = new Node(value);
    if (this.root === null) {
      this.root = node;
      return;
    }
    this._insertRecursively(this.root, node);
  }
  _insertRecursively(root, node) {
    if (root.left === null) {
      root.left = node;
      return;
    }
    if (root.right === null) {
      root.right = node;
      return;
    }
    if (node.value < root.value) this._insertRecursively(root.left, node);
    if (node.value > root.value) this._insertRecursively(root.right, node);
  }
  preOrder(node = this.root) {
    if (node === null) return;
    console.log(node.value);
    this.preOrder(node.left);
    this.preOrder(node.right);
  }
  postOrder(node = this.root) {
    if (node === null) return;
    this.postOrder(node.left);
    this.postOrder(node.right);
    console.log(node.value);
  }
  inOrder(node = this.root) {
    if (node === null) return;
    this.inOrder(node.left);
    console.log(node.value);
    this.inOrder(node.right);
  }
  bfs() {
    let queue = [this.root];
    while (queue.length > 0) {
      let node = queue.shift();
      console.log(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  heightOfBinaryTree(node = this.root) {
    if (node == null) return -1; // if the leaf node reach no node the tree is empty  so return -1
    const left = this.heightOfBinaryTree(node.left);
    const right = this.heightOfBinaryTree(node.right);
    return Math.max(left, right) + 1; // height of the subtree is max distance from root to leaf
  }
  countNode(node = this.root) {
    if (this.root == null) {
      return 0;
    }
    if (node == null) return 0;   // return 0 if node is empty this will add up too the stack giving the count
    const left = this.countNode(node.left);    // postOrdder
    const right = this.countNode(node.right);
    return left + right + 1;  
  }

  countLeafNodes(node=this.root,count=0){
    if(node==null){
        return 0
    }
if(node.left === null && node.right ===null){
    return 1
}
const left =  this.countLeafNodes(node.left)  // 
const right = this.countLeafNodes(node.right) 
return left+right
// return Math.min(left,right)
  }
  depthofNode(nodeValue,root=this.root,depth=0){
    if(node == null) return -1
// if(node.left) {
//   this.depthofNode(node)
// }
    // if(node.value == 0){
    //     return 0 
    // }
    // if(node == null) return 
    // const left = this.depthofNode(node.left)
    // const right = this.depthofNode(node.right)
    
  }
}

const binaryTree = new BinaryTree();
binaryTree.insertNode(10);
binaryTree.insertNode(1);
binaryTree.insertNode(3);
binaryTree.insertNode(4);
binaryTree.insertNode(5);
const height = binaryTree.heightOfBinaryTree();
// console.log(height);
const node = binaryTree.countLeafNodes();
console.log(node);

// binaryTree.inOrder()
// binaryTree.preOrder()
// binaryTree.postOrder()
// binaryTree.bfs()
