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
  insertWord(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEnd = true;
  }
  search(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return node.isEnd == true;
  }
  removeWord(word) {
    this.removeRecursively(this.root,word,0)
    
  }
  removeRecursively(node,word,index){
    if(word.length === index){
        if(!node.isEnd) return false
        node.isEnd = false
        return Object.keys(node.children).length === 0
    }
    const char = word[index]
    const children = node.children[char]
    if(!children) return false

    let shouldDelete = this.removeRecursively(children,word,index+1)
    if(shouldDelete){
        delete node.children[char]
        return Object.keys(node.children).length == 0 && !node.isEnd
    }
    return false
    
  }

  print(node=this.root){
    if(node===null)return
    for(const char in node.children){
        console.log(char+'')
        this.print(node.children[char])
    }
  }
}

const trie = new Trie()
trie.insertWord("apple")
trie.insertWord("banana")
trie.removeWord("banana")
trie.print()
