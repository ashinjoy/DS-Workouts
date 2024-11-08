class Node{
    constructor(){
        this.children = {}
        this.isEnd = false
    }
}
class Trie{
    constructor(){
        this.root = new Node()
    }
    insert(word){
        let curr = this.root
        for(const char of word){
            if(!curr.children[char]){
                curr.children[char] = new Node()
            }
            curr = curr.children[char]
        }
        this.isEnd = true
    }
    delete(word){
       this._deleteHepler(this.root,word,0)
    }
    _deleteHepler(node,word,index){
        if(index === word.length){
            if(!node.isEnd){
                return null
            }
            node.isEnd = false
            return
        }
        let char = word[index]
        let  nextNode = node.children[char]
        if(!nextNode){
            // console.log("word is not present")
            return 
        }
        this._deleteHepler(nextNode,word,index+1)
        if(Object.keys(nextNode.children).length ===0 && !nextNode.isEnd ){
            delete node.children[char]
        }
    }
    search(word){
        let curr = this.root
        for(const char of word){
            if(!curr.children[char]){
                return false
            }
            curr = curr.children[char]
        }
        return true
    }
    display(){
        this._displaynode(this.root,"")
    }
    _displaynode(node, prefix) {
    for (const char in node.children) {
        console.log( prefix + char);
        this._displaynode(node.children[char], prefix + char);
    }
}
}
const trie = new Trie()
trie.insert("apple")
trie.insert("banana")
trie.delete("apple")
console.log(trie.search("banana"))
// trie.display()