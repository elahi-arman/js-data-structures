const { Vertex, hasVertex } = require('./Vertex')

const sortVertex = (vA, vB) => vA.data - vB.data;

module.exports = fn => (start, end) => {
  const visited = []
  const inReach = [ start ];
  const hasFunction = typeof fn === 'function'

  while (inReach.length > 0){
    const currentVertex = inReach.shift();
    
    // there may have been a shorter route that came up 
    // while currentVertex has yet to be processed
    if (hasVertex(visited, currentVertex.id)){
      continue
    }

    // if the user provided a function ( ie, to save the path )
    if (hasFunction){
      fn(currentVertex);
    }

    if ( end.id === currentVertex.id ){
      return currentVertex.data
    }

    const neighboringEdges = currentVertex.edges;

    const nextVertices = neighboringEdges
      .filter(neighbor => {
        const other = neighbor.getOther(currentVertex.id);
        return !hasVertex(visited, other.id)
      })
      .map(neighbor => {
        const other = neighbor.getOther(currentVertex.id);
        return Vertex({
          ...other, 
          data: neighbor.weight + currentVertex.data, 
          from: currentVertex, 
          addedWeight: currentVertex.data
        })
      })

    inReach.push(...nextVertices);
    inReach.sort(sortVertex);

    visited.push(currentVertex)
  }

  return -1;
}

