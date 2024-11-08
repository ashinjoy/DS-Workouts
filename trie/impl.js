class TrieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}
class Trie{
    constructor(){
        this.root  = new TrieNode()
    }

  insert(word) {
    let curr = this.root;
    for (const char of word) {
      if (!curr.children[char]) {
        curr.children[char] = new TrieNode();
      }
      curr = curr.children[char];
    }
    curr.isEnd = true;
  }
  search(word) {
    let curr = this.root;
    for (const char of word) {
      if (!curr.children[char]) {
        console.log("No word matching");
        return false;
      }
      curr = curr.children[char];
    }
    if (curr.isEnd) {
      return true;
    }else{
        return false
    }
  }
  searchPrefix(prefix) {
    let curr = this.root;
    for (const char of prefix) {
        // console.log(char, "====>",curr.children[char])
      if (!curr.children[char]) {
        return false
      }
      curr = curr.children[char]
    }
    return true
  }
  delete(word){
    this._deleteHepler(this.root,word,0)
 }
 _deleteHepler(node,word,index){
  console.log(index,word.length,node);
     if(index === word.length){
         if(!node.isEnd){
             return null
         }
         node.isEnd = false
         return
     }
     let char = word[index]
     console.log(char);
     let  nextNode = node.children[char]
     if(!nextNode){
         return 
     }
     this._deleteHepler(nextNode,word,index+1)
     if(Object.keys(nextNode.children).length ===0 && !nextNode.isEnd ){
         delete node.children[char]
     }
 }
  display(){
    this.dfsdisplay(this.root,"")
  }
  dfsdisplay(node,prefix){
    if(node.isEnd){
        console.log(prefix)
    }
// let curr = node
for(const char in node.children){
    this.dfsdisplay(node.children[char],prefix+char)
}
  }
  autoComplete(prefix){
let curr = this.root
for(const char of prefix){
    if(!curr.children[char]){
return false
    }
    curr = curr.children[char]
}
this.autoFill(curr,prefix)

  }
  autoFill(node,prefix){
    if(node.isEnd){
        console.log(prefix)
        
    }
    for(const char in node.children){
        this.autoFill(node.children[char],prefix+char)
    }
  }
  wordCount(node){
let count = 0
if(node.isEnd){
  count++
}
for(const char in node.children){
 count += this.wordCount(node.children[char])

}
return count

  }
  hasWordsStartingFromEachAlphabet() {
    const ALPHABETS = 'abcdefghijklmnopqrstuvwxyz';
    for (const char of ALPHABETS) {
      if (!this.root.children[char]) {
        return false;
      }
    }
    return true; 
  }


}
const trie = new Trie()
trie.insert('apple')
trie.insert('app')
trie.insert('ashin')
trie.insert('banana')
trie.insert('geeks')
trie.insert('geeks')
trie.insert('for')
trie.delete('apple')
// console.log(trie.search("banana"))
// console.log(trie.search("ba"))
// trie.autoComplete('ap')

// console.log(trie.searchPrefix("apy"))
trie.display()
console.log(trie.wordCount(trie.root))





