class trieNode{
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
        let curr =  this.root
        for(const char of word){
            if(!curr.children[char]){
                curr.childern[char] = char
            }
            curr = curr.children[char]

        }
        curr.isEnd = true
    }
}
const trie = new Trie()
trie.insert("apple")
trie.insert("app")
trie.insert("anbin")
trie.insert("ashin")


