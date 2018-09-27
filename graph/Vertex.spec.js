const Vertex = require('Vertex')

describe('interacting with a vertex', () => {
  it('should be able to create a new vertex', () => {
    expect(Vertex(4, 6)).toEqual({
      id: 4,
      data: 6
    })
  })
})