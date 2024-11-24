class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insertNode(value) {
    const node = new TreeNode(value);
    if (this.root == null) {
      this.root = node;
      return;
    }
    this.insertRecursive(this.root, node);
  }
  insertRecursive(root, node) {
    if (node.value < root.value) {
      if (root.left) {
        this.insertRecursive(root.left, node);
      } else {
        root.left = node;
        return;
      }
    }
    if (node.value > root.value) {
      if (root.right) {
        this.insertRecursive(root.right, node);
      } else {
        root.right = node;
        return;
      }
    }
  }
  print(root = this.root) {
    if (root == null) {
      return;
    }
    console.log(root.value);
    if (root.left) this.print(root.left);
    if (root.right) this.print(root.right);
  }

  isBST(root = this.root, max = Number.MAX_VALUE, min = Number.MIN_VALUE) {
    if (root == null) {
      return true;
    }
    if (!(min < root.value && root.value < max)) {
      // check if the value is bst by checking it whether it is in bounds
      return false;
    }
    return (
      this.isBST(root.left, root.value, min) && // check leftsubtree left should be least than parent and right should be greater tah parent
      this.isBST(root.right, max, root.value)
    );
  }
  isMinAndMax() {
    let sorted = []
   function inOrder(node){
    if(node == null) return
      inOrder(node.left)
      sorted.push(node.value)            // inorder traversl and push to array
      inOrder(node.right)
    }
    inOrder(this.root)
    return [sorted[0],sorted[sorted.length-1]]
    
  }
 
  findMin(node=this.root){
    while(node.left){
      node = node.left    // itertaive aproach iterate until we find min node
    }
    return node.value
  }
  findMax(node=this.root){
    while(node.right){
      node = node.right     //max elemnt is at the right subtree and last leaf node
    }
    return node.value
  }
findMinRecursion(node=this.root){
if(node==null) return
if(node.left == null){ return node.value}
if(node.left) {
 return this.findMinRecursion(node.left)     // recursive algo for finding min recursively check until left node if no left node return node.value
}
}
inOrderSuccessor(node){
  node = node.right
  while(curr && curr.left){
    node = curr.left
  }
  return node

}
}

const tree = new BinarySearchTree();
tree.insertNode(10);
tree.insertNode(5);
tree.insertNode(15);
tree.insertNode(2);
tree.insertNode(7);
// tree.print();
const minmax = tree.findMinRecursion()
console.log(minmax);

const isbst = tree.isBST();
// console.log(isbst);
