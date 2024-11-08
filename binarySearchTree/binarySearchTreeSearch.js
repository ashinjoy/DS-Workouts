class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right =null
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
        const node = new Node(value)
        if(this.isEmpty()){
            this.root = node
        }else{
            this.insertnode(this.root,node)
        }
    }
    insertnode(root,node){
        if(node.value < root.value){
            if(root.left === null){
                root.left = node
            }else{
                this.insertnode(root.left,node)
            }
        }else{
            if(root.right === null){
                root.right=node
            }else{
                this.insertnode(root.right,node)
            }
        }
    }
    search(root,value){
        if(!this.isEmpty()){
           if(value === root.value){
               console.log('Item Found!')
               return root
           }else{
               if(value < root.value){
                   if(root.left === null){
                       console.log('No node Available')
                       return -1
                   }else{
                    this.search(root.left,value)
                   }
               }else{
                   if(root.right === null){
                       console.log("No node Available")
                       return -1
                   }else{
                      this.search(root.right,value)
                   }
               }
           }
        }
    }
}
const bst = new binarySearchTree()
bst.insert(10)
bst.insert(5)
bst.insert(15)
console.log(bst.search(bst.root,10))