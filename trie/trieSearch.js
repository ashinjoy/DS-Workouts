class TrieNode {
    constructor() {
      this.children = {};
      this.isEnd = false;
    }
  }
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
    insert(word) {
      let curr = this.root;

    //   console.log(curr)
      for (const char of word) {
        // console.log(curr.children)
        //   console.log(char)
        if (!curr.children[char]) {

          curr.children[char] = new TrieNode()
        }
        curr = curr.children[char];
        // console.log(char)
      }
      curr.isEnd = true;
    }
    search(word) {
      let curr = this.root;
      for (const char of word) {
          if(!curr.children[char]){
              console.log("Word Not Found")
              return false
          }
          curr = curr.children[char]
      }
      return true
    }
display(){
 this. _depthFirstSearch(this.root,"")
}
_depthFirstSearch(node,prefix){
  if(node.isEnd){
    console.log(prefix)
  }
  for(const char in node.children){
   this. _depthFirstSearch(node.children[char],prefix+char)

  }
}
searchPrefix(prefix){
let curr = this.root
for(const char of prefix){
  if(!curr.children[char]){
    console.log("No such Key is Present")
    return false
  }
  curr = curr.children[char]
}
this.autoSuggestion(curr,prefix)

}
autoSuggestion(node,prefix){
if(node.isEnd){
  console.log(prefix)
  return 
}
for(const child in node.children){
  this.autoSuggestion(node.children[child],prefix+child)
}

}

  }
  const trie  = new Trie()
  trie.insert("ashin")
  trie.insert("anbin")
  trie.insert("kiran")
  trie.insert("karan")
  // trie.display()
 trie.searchPrefix("k")
//   console.log(trie.search("kiran"))




