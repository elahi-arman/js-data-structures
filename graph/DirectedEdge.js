class DirectedEdge {
  constructor(start=null, end=null, weight=0){
    this.start = start
    this.end = end
    this.weight = weight
  }

  isStart(id){
    return this.start.id === id
  }

  isEnd(id){
    return this.end.id === id
  }

  getOther(id){
    if (this.isStart(id)){
      return this.end
    } else if (this.isEnd(id)){
      return this.start
    } else {
      return null
    }
  }

  fromStart(vertex){
    return new DirectedEdge(vertex, this.end, this.weight)
  }

  toEnd(vertex){
    return new DirectedEdge(this.start, vertex, this.weight)
  }

  reweightEdge(weight){
    return new DirectedEdge(this.start, this.end, weight)
  }

  equals(edge){
    return this.start.id === edge.start.id && this.end.id === edge.end.id
  }

  static connecting(from, to){
    return new DirectedEdge(from, to, 0)
  }
}

module.exports = DirectedEdge