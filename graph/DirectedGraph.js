const Edge = require('./DirectedEdge');
const { hasVertex } = require('./Vertex');
const dijkstra = require('./dijkstra');

class Graph {
  constructor(){
    this.vertices = []
    this.dijkstra = dijkstra.bind(this);
  }

  addVertex(vertex){
    this.vertices.push(vertex)
  }

  getVertex(id){
    for (let i = 0; i < this.vertices.length; i++){
      if (this.vertices[i].id === id){
        return this.vertices[i];
      }
    }
    return null
  }

  addEdge(startID, endID, weight=0){
    const startVertex = this.getVertex(startID);
    const endVertex = this.getVertex(endID);

    if (startVertex === null || endVertex === null){
      return null;
    }

    startVertex.edges.push(new Edge(startVertex, endVertex, weight))
  }

  breadthFirstTraversal(fn, rootVertex){
    const visited = [];
    let notVisited = [ rootVertex ];

    while (notVisited.length > 0){
      const vertex = notVisited.shift();

      if (hasVertex(visited, vertex)){
        continue;
      }
      
      fn(vertex);
      visited.push(vertex);

      const nextVertices = vertex.edges.map(edge => edge.end)
      notVisited = notVisited.concat(nextVertices);
    }
  }
}

module.exports = Graph