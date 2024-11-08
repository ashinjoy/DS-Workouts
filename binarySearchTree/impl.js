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
        return
      } else {
        this.insertNode(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
        return;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }
  inorder(root) {
    if (root) {
      this.inorder(root.left);
      console.log(root.value);
      this.inorder(root.right);
    }
  }
  preOrder(root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
  postOrder(root) {
    if (root) {
      this.preOrder(root.left);
      this.preOrder(root.right);
      console.log(root.value);
    }
  }
  contains(node, value) {
    if (!node) {
      console.log("No such value avialable");
      return false;
    }
    if(node.value === value){
        console.log('Value Found')
        return true
    }
    if(value < node.value){
       return this.contains(node.left,value)
    }
    if(value > node.value){
       return this.contains(node.right,value)

    }
  }
  deleteNode(value){
    if(this.isEmpty()){
        console.log('No elements found')
        return false
      }else{
        this.delete(this.root,value)

      }
  }
  delete(root,value){

  if(value < root.value){
    root.left = this.delete(root.left,value)
    return root
  }
  else if(value > root.value){
root.right = this.delete(root.right,value)
return root
  }
  else{
    if(root === null){
        return null
    }
    if(!root.left && !root.right){
        return null
    }
    else if(!root.left){
        return root.right
    }
    else if(!root.right){
        return root.left
    }
    else{

        let successor = this.min(root.right)
        root.value = successor.value
        root.right = this.delete(root.right,successor.value)
        return root

    }

  }
}
min(node){
    if(!node.left){
        return node
    }
    return this.min(node.left)
}
max(node){
if(!node.right){
    return node.value
}
return this.max(node.right)
}
bfs(root){
    // console.log(root)
const queue =[]
queue.push(root)

while(queue.length !=0 ){
    const remove = queue.shift()
    // console.log(remove)
    console.log(remove.value)
    if(remove.left){
        queue.push(remove.left)
    }
    if(remove.right){
        queue.push(remove.right)
    }

}
}
}
const bst = new binarySearchTree()
bst.insert(10)
bst.insert(2)
bst.insert(15)
bst.insert(20)
bst.insert(30)
bst.insert(5)
// bst.deleteNode(5)
// console.log(bst.max(bst.root))
bst.bfs(bst.root)
// console.log(bst.contains(bst.root,30))
// bst.inorder(bst.root)
// bst.preOrder(bst.root)
