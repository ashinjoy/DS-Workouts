class TreeNode{
  constructor(value){
    this.value = value
    this.children = []
  }
  addChildNode(value){
    const node = new TreeNode(value)
    this.children.push(node)
  }
  removeChild(node){
    this.children = this.children.filter((el)=>el!==node)
  }
}

class Tree{
  constructor(){
    this.root = null
  }
  setRoot(value){
    const node = new TreeNode(value)
   return this.root = node
  }
  printTree(node=this.root){
    if(node == null) return
    console.log(node.value)
   
    
    for(const child of node.children){
      this.printTree(child)
    }
  }
}

const tree = new Tree()
const ele = tree.setRoot(5)
ele.addChildNode(1)
ele.addChildNode(3)
ele.addChildNode(4)
tree.printTree()

