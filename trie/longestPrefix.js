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
    for (const char of word) {
      if (!curr.children[char]) {
        curr.children[char] = new TrieNode();
      }
      curr = curr.children[char];
    }
    curr.isEnd = true;
  }
  delete(word) {
    this._deleteHelper(this.root, word, 0);
  }
  _deleteHelper(root, word, index) {
    if (index === word.length) {
      if (!root) {
        return false;
      }
      if (root.isEnd) {
        root.isEnd = false;
        return;
      }
    }
    const char = word[index]
    let nextNode = root.children[char]
    if(!nextNode){
        return
    }
    this._deleteHelper(nextNode,word,index+1)
    if(Object.keys(nextNode.children).length ==0 && !nextNode.isEnd){
        delete root.children[char]
    }

  }
  display(){
this.dfs(this.root,"")
  }
  dfs(node,prefix){
    if(node.isEnd){
        console.log(prefix)
        // return
    }
    for(const char in node.children){
        this.dfs(node.children[char],prefix+char)
    }
  }


}
const trie =  new Trie()
trie.insert("ashin")
trie.insert("anbin")
trie.insert("anjo")
trie.insert("banana")
trie.insert("robust")
trie.delete("anbin")
trie.display()
