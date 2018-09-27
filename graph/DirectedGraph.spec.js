const Vertex = require('./Vertex')
const Graph = require('./DirectedGraph');

const g = new Graph();
g.addVertex(Vertex({id: 1, data: 1}))
g.addVertex(Vertex({id: 2, data: 2}))
g.addVertex(Vertex({id: 3, data: 3}))
g.addVertex(Vertex({id: 4, data: 4}))
g.addVertex(Vertex({id: 5, data: 5}))
g.addVertex(Vertex({id: 6, data: 6}))

g.addEdge(1, 2)
g.addEdge(2, 3)

const fn = vertex => console.log(vertex)
g.breadthFirstTraversal(fn, g.getVertex(1))