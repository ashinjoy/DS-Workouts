class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
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
      this.insertNode(this.root, node);
    }
  }
  insertNode(root, node) {
    if (node.value < root.value) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }
  delete(value) {
    if (this.isEmpty()) {
      return false;
    } else {
      this.deleteNode(this.root, value);
    }
  }
  deleteNode(node, value) {
    if (node === null) {
        return null;  // Node not found or tree is empty
    }
    if (value < node.value) {
        node.left = this.deleteNode(node.left, value);
    } else if (value > node.value) {
        node.right = this.deleteNode(node.right, value);
    } else {
        if (!node.left && !node.right) {
            return null;  // Node has no children
        } else if (!node.left) {
            return node.right;  // Node has only right child
        } else if (!node.right) {
            return node.left;  // Node has only left child
        } else {
            let successor = this.min(node.right);
            node.value = successor.value;
            node.right = this.deleteNode(node.right, successor.value);
            return node;
        }
    }
    return node;  // Return the updated node
}



min(node){
    if(!node.left){
        return node
    }
    return this.min(node.left)
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
bst.insert(20);
bst.insert(12);
bst.insert(1);
bst.insert(4);
// bst.insert(5);
bst.delete(5);

bst.preOrder(bst.root);
