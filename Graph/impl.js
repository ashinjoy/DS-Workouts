class Graph {
  constructor() {
    this.adjList = {};
  }
  addVertex(vertex) {
    if (!this.adjList[vertex]) {
      this.adjList[vertex] = new Set();
    }
  }
  addEdge(vertex1, vertex2) {
    if (!this.adjList[vertex1]) {
      this.adjList[vertex1];
    }
    if (!this.adjList[vertex2]) {
      this.adjList[vertex2];
    }
    this.adjList[vertex1].add(vertex2);
    this.adjList[vertex2].add(vertex1);
  }
  removeEdge(vertex1, vertex2) {

    this.adjList[vertex1].delete(vertex2);
    this.adjList[vertex2].delete(vertex1);
  }
  removeVertex(vertex) {
    if (!this.adjList[vertex]) {
      console.log("No such Vertex Available");
      return false;
    }
    for (const adj of this.adjList[vertex]) {
      this.removeEdge(adj, vertex);
    }
    delete this.adjList[vertex];
  }
  bfs(vertex) {
    const visited = new Set();
    const queue = [];
    visited.add(vertex);
    queue.push(vertex);
    while (queue.length !== 0) {
      const removed = queue.shift();
      console.log(removed);
      for (const adj of this.adjList[removed]) {
        if (!visited.has(adj)) {
          visited.add(adj);
          queue.push(adj);
        }
      }
    }
  }
  search(vertex){
    
  }
  dfs(vertex) {
    const visited = new Set();
    this._dfsHelper(visited, vertex);
  }
  _dfsHelper(visited, vertex) {
    visited.add(vertex);
    console.log(vertex);
    for (const adj of this.adjList[vertex]) {
      if (!visited.has(adj)) {
        this._dfsHelper(visited, adj);
      }
    }
  }
  display() {
    console.log('hi')
    for (const char in this.adjList) {
      console.log(char, "=====>", this.adjList[char]);
    }
  }
}
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');
// graph.removeEdge("A","B")
graph.removeVertex("A")


graph.display();
// graph.bfs("A")
// graph.dfs("A")

