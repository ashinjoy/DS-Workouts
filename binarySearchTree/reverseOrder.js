class node {
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
      const newNode = new node(value);
      if (this.isEmpty()) {
        this.root = newNode;
      } else {
      this._insertNode(newNode, this.root);
      }
    }
    _insertNode(node, root) {
      if (node.value < root.value) {
        if (root.left === null) {
          root.left = node;
        } else {
          this._insertNode(node, root.left);
        }
      } else {
        if (root.right === null) {
          root.right = node;
        } else {
          this._insertNode(node, root.right);
        }
      }
    }
  inorder(root){
      if(root){
          this.inorder(root.right)
          console.log(root.value)
          this.inorder(root.left)    
  
      }
  }
  
  }
  const bst = new binarySearchTree()
  bst.insert(10)
  bst.insert(5)
  bst.insert(15)
  bst.insert(20)
  bst.insert(12)
  bst.insert(1)
  bst.insert(4)
  bst.inorder(bst.root)
  
  