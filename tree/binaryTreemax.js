class Node {
  constructor(value) {
    this.value = value
    this.left = null;
    this.right = null;
  }
}
function MaxValue(root) {
  if (!root) {
    console.log("Tree is Empty");
    return null;
  }
  let max = root.value;
  function dfs(node) {
    if (node) {
      if (node.value > max) {
        // console.log(max)
        max = node.value;
      }
       dfs(node.left);
       dfs(node.right);
    }
  }
   dfs(root);
  return max

}

const root = new Node(10)
// console.log(root)
 root.left = new Node(5)
 root.right = new Node(1)
 root.left.left = new Node(23)
 root.left.right = new Node(7)
console.log(MaxValue(root))