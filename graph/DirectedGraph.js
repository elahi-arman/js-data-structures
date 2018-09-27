const Edge = require('./DirectedEdge')

class Graph {
  constructor(){
    this.vertices = []
  }

  addVertex(vertex){
    this.vertices.push(vertex)
  }

  hasVertex(set, id){
    for (let i = 0; i < set.length; i++){
      if (set[i].id === id){
        return true;
      }
    }
    return false
  }

  getVertex(id){
    for (let i = 0; i < this.vertices.length; i++){
      if (this.vertices[i].id === id){
        return this.vertices[i];
      }
    }
    return null
  }

  addEdge(startID, endID){
    const startVertex = this.getVertex(startID);
    const endVertex = this.getVertex(endID);

    if (startVertex === null || endVertex === null){
      return null;
    }

    startVertex.edges.push(new Edge(startVertex, endVertex))
  }

  breadthFirstTraversal(fn, rootVertex){
    const visited = [];
    let notVisited = [ rootVertex ];

    while (notVisited.length > 0){
      const vertex = notVisited.shift();

      if (this.hasVertex(visited, vertex)){
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