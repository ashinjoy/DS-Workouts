class trieNode {
  constructor() {
    this.children = {};
    this.isEnd = false;
  }
}

class trie {
  constructor() {
    this.root = new trieNode();
  }
  insert(word) {
    let curr = this.root;
    for (const char of word) {
      if (!curr.children[char]) {
        curr.children[char] = new trieNode();
      }
      curr = curr.children[char];
    }
    curr.isEnd = true;
  }
  search(word) {
    let curr = this.root;
    for (const char of word) {
      if (!curr.children[char]) {
        return false;
      }
      curr = curr.children[char]
    }
    if (curr.isEnd) {
      return true;
    }
  }
  wordFormation(dictionary,word) {
    console.log(word)
    const tri = new trie();
    for (const char of dictionary) {
      tri.insert(char);
    }
    for(let i=1;i<word.length;i++){
        let prefix = word.substring(0,i)
        let suffix =  word.substring(i)

        if(tri.search(prefix) && tri.search(suffix)){
            // console.log("hi")
            return true
        }

    }
    return false
    
  }
}
const dictionary = ["news", "abcd", "tree", "geeks", "paper"];
const t =  new trie()
console.log(t.wordFormation(dictionary,"newspaper"))
