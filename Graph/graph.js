class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
    if(!this.adjacencyList[vertex]){
        this.adjacencyList[vertex] = new Set()
    }
    }
    addEdges(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }
    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex ,'=>',[...this.adjacencyList[vertex]]  )
        }
    }
    
    hasEdge(vertex1,vertex2){
        return this.adjacencyList[vertex1].has(vertex2)
    }
    removeEdges(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        for(let adjacentVertex of this.adjacencyList[vertex]){
            this.removeEdges(vertex,adjacentVertex)
        }
        delete this.adjacencyList[vertex]
        
    }
}
const graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
// graph.addVertex("D")
graph.addEdges("A","B")
graph.addEdges("B","C")
graph.removeEdges('A','B')
console.log(graph.hasEdge('A','C'))
graph.removeVertex('A')
graph.display()
