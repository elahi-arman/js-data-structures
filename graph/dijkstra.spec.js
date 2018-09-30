const {Vertex} = require('./Vertex')
const Graph = require('./DirectedGraph');

describe('testing out dijkstra on well formed graph',  () => {
  const g = new Graph();
  g.addVertex(Vertex({id: 0, data: 0}))
  g.addVertex(Vertex({id: 1, data: 0}))
  g.addVertex(Vertex({id: 2, data: 0}))
  g.addVertex(Vertex({id: 7, data: 0}))
  g.addVertex(Vertex({id: 6, data: 0}))
  g.addVertex(Vertex({id: 5, data: 0}))
  g.addVertex(Vertex({id: 8, data: 0}))
  g.addVertex(Vertex({id: 3, data: 0}))
  g.addVertex(Vertex({id: 4, data: 0}))

  g.addEdge(0, 1, 4)
  g.addEdge(0, 7, 8)
  g.addEdge(1, 7, 11)
  g.addEdge(1, 2, 8)
  g.addEdge(2, 8, 2)
  g.addEdge(7, 8, 7)
  g.addEdge(7, 6, 1)
  g.addEdge(6, 8, 6)
  g.addEdge(2, 5, 4)
  g.addEdge(2, 3, 7)
  g.addEdge(6, 5, 2)
  g.addEdge(5, 4, 10)
  g.addEdge(3, 5, 14)
  g.addEdge(3, 4, 9)

  it('should get the proper order for this graph', () => {
    const fn = jest.fn() 
    g.dijkstra(fn)(g.getVertex(0), g.getVertex(4))

    expect(fn).toHaveBeenCalledTimes(9);

    const calls = fn.mock.calls.map(call => ({
      id: call[0].id,
      weight: call[0].data,
    }));

    expect(calls[0]).toEqual({id: 0, weight: 0})
    expect(calls[1]).toEqual({id: 1, weight: 4})
    expect(calls[2]).toEqual({id: 7, weight: 8})
    expect(calls[3]).toEqual({id: 6, weight: 9})
    expect(calls[4]).toEqual({id: 5, weight: 11})
    expect(calls[5]).toEqual({id: 2, weight: 12})
    expect(calls[6]).toEqual({id: 8, weight: 14})
    expect(calls[7]).toEqual({id: 3, weight: 19})
    expect(calls[8]).toEqual({id: 4, weight: 21})
  })
})
