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
  isEmpty() {
    return this.root === null;
  }
  insert(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.root = node;
    } else {
      this._insertNode(this.root, node);
    }
  }
  _insertNode(root, node) {
    if (node.value < root.value) {
      if (root.left === null) {
        root.left = node;
      } else {
        this._insertNode(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        this._insertNode(root.right, node);
      }
    }
  }

//     delete(value) {
//        this.deleteNode(this.root, value);
//   }

//   deleteNode(node, value) {
//       if (!node) {
//           return null;
//       }

//       if (value < node.value) {
//           node.left = this.deleteNode(node.left, value);
//         //   return node;
//       } else if (value > node.value) {
//           node.right = this.deleteNode(node.right, value);
//         //   return node;
//       } else {
//           if (!node.left && !node.right) {
//               return null;
//           }

//           if (!node.left) {
//               return node.right;
//           }

//           if (!node.right) {
//               return node.left;
//           }

//           const successor = this.findMinNode(node.right);
//           node.value = successor.value;
//           node.right = this.deleteNode(node.right, successor.value);
//           return node;
//       }
//   }

//   findMinNode(node) {
//       if (!node.left) {
//           return node;
//       }
//       return this.findMinNode(node.left);
//   }

  delete(value) {
    this.root =this._deleteNode(this.root, value);
  }
  _deleteNode(root, value) {
 
    if (value < root.value) {
      // console.log(root.value)
      root.left = this._deleteNode(root.left, value);
      return root
    } else if (value > root.value) {
       root.right = this._deleteNode(root.right, value);
       return root
    } else {
      if (root === null) {
        return null;
      }
      if (!root.right && !root.left) {
        return null;
      } else if (!root.left) {
        return root.right;
      } else if (!root.right) {  
        return root.left;
      } else {
        let successor = this.findInorderSuccessor(root.right);
        //   console.log(successor.value)
        root.value = successor.value;
        root.right = this._deleteNode(root.right, successor.value);
        return root
      }
    }
  }

  findInorderSuccessor(node) {
    if (!node.left) {
      return node;
    }
   return this.findInorderSuccessor(node.left);
  }
  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
}
const bst = new binarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(14);
bst.delete(5);

bst.preOrder(bst.root);
