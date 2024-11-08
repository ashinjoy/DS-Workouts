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
      this.addVertex(vertex1);
    }
    if (!this.adjList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjList[vertex1].add(vertex2);
    this.adjList[vertex2].add(vertex1);
  }
  hasEdge(vertex1, vertex2) {
    return this.adjList[vertex1].has(vertex2);
  }
  removeEdge(vertex1, vertex2) {
    this.adjList[vertex1].delete(vertex2);
    this.adjList[vertex2].delete(vertex1);
  }
  removeVertex(vertex) {
    for (const adj of this.adjList[vertex]) {
      this.removeEdge(adj, vertex);
    }
    delete this.adjList[vertex];
  }
  bfs(vertex) {
    const visited = new Set();
    visited.add(vertex);
    const queue = [vertex];
    while (queue.length !== 0) {
      const remove = queue.shift();
      console.log(remove);
      for (const adj of this.adjList[remove]) {
        if (!visited.has(adj)) {
          visited.add(adj);
          queue.push(adj);
        }
      }
    }
  }
  dfs(vertex) {
    const visited = new Set();
    this.dfsHelper(visited, vertex);
  }
  dfsHelper(visited, vertex) {
    visited.add(vertex);
    for (const adj of this.adjList[vertex]) {
      if (!visited.has(adj)) {
        this.dfsHelper(visited, adj);
      }
    }
  }
}
