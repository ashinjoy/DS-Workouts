class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(vertex) {
    if (!this.adjList[vertex]) {
      this.adjList[vertex] = new Set();
    }
  }
  addEdges(vertex1, vertex2) {
    if (!this.adjList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjList[vertex1].add(vertex2);
    this.adjList[vertex2].add(vertex1);
  }
  hasCycle(vertex) {
    const visited = new Set();
    const recursiveStack = new Set();
   return this._dfs(visited, recursiveStack,vertex);
  }
  _dfs(visit, recursive, vertex) {
    visit.add(vertex);
    recursive.add(vertex);
    console.log('====>',visit,recursive)
    for (const adj of this.adjList[vertex]) {
      if (!visit.has(adj)) {
        
        if (this._dfs(visit, recursive, adj)) {
          return true;
        }
        else if (recursive.has(adj)) {
          return true;
        }
      }
    }
    
    return false
  }
  

}
const graph = new Graph();
graph.addEdges(0, 1);
graph.addEdges(0, 2);
graph.addEdges(1, 2);
graph.addEdges(0, 3);
graph.addEdges(3, 3);
console.log(graph.hasCycle(0))
