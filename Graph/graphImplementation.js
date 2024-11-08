class Graph{
    constructor(){
        this.adjList = {}
    }
    addVertex(vertex1){
        if(!this.adjList[vertex1]){
            this.adjList[vertex1] = new Set()
        }
        
    }
    addEdge(vertex1,vertex2){
        if(!this.adjList[vertex1] ){
            this.addVertex(vertex1)
        }
        if(!this.adjList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjList[vertex1].add(vertex2)
        this.adjList[vertex2].add(vertex1)
    }
    removeEdge(vertex1,vertex2){
        this.adjList[vertex1].delete(vertex2)
        this.adjList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if(!this.adjList[vertex]){
            return null
        }
        for(const adj of this.adjList[vertex]){
            this.removeEdge(adj,vertex)
        }
        delete this.adjList[vertex]
    }
    bfs(startingVertex){
         const visited = new Set()
         const queue = []
         visited.add(startingVertex)
         queue.push(startingVertex)
         while(queue.length > 0){
             const dequeue = queue.shift()
             console.log(dequeue)
             
             for(const adjacent of this.adjList[dequeue]){
                 if(!visited.has(adjacent)){
                     visited.add(adjacent)
                     queue.push(adjacent)
                 }
             }
         }
    }
    dfs(startingVertex){
        const visited = new Set()
        this.dfsHelper(startingVertex,visited)
    }
    dfsHelper(vertex,visited){
        
        visited.add(vertex)
        console.log(vertex)
        for(const adj of this.adjList[vertex]){
            if(!visited.has(adj)){
                this.dfsHelper(adj,visited)
            }
        }
    }
    display(){
        for(const adj in this.adjList){
            console.log(adj, "=>", ...this.adjList[adj])
        }
    }
}
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");
graph.removeVertex("A")
graph.display()

// console.log("BFS Traversal:", graph.bfs("A")); // Output: [ 'A', 'B', 'C', 'D' ]
// console.log("DFS Traversal:", graph.dfs("A"))
