class node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class binarySearchTree{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root === null
    }
    insert(value){
        const newnode = new node(value)
        if(this.isEmpty()){
            this.root = newnode
        
        }else{
            this.insertnode(this.root,newnode)
        }
    }
    insertnode(root,node){
        if(node.value<root.value){
            if(root.left === null){
                root.left = node
            }else{
                this.insertnode(root.left,node)
            }
        }else{
            if(root.right === null){
                root.right = node
            }else{
                this.insertnode(root.right,node)
            }
        }
    }
}
const bst = new binarySearchTree()
bst.insert(10)
bst.insert(5)
bst.insert(12)