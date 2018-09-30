const Heap = require('./Heap')

describe('creating and getting elements from a min heap', () => {
  const isMoreThan = (a, b) => {
    return a > b
  }

  const heap = new Heap(isMoreThan);
  
  beforeEach(() => {
    heap.__flush()
  })

  it('should be able to insert', () => {
    heap.insert(5)
    heap.insert(6)
    heap.insert(3)
    expect(heap.data).toEqual([3, 6, 5])
  })

  it('should be able to peek', () => {
    heap.insert(0)
    expect(heap.peek()).toEqual(0)
  })

  it('should return null for peek with no elements', () => {
    expect(heap.peek()).toEqual(null)
  })

  it('should be able to get and then re-heapify', () => {
    heap.insert(0)
    heap.insert(6)
    heap.insert(3)
    heap.insert(4)
    heap.insert(1)

    expect(heap.data).toEqual([0, 1, 3, 6, 4])
    const deleted = heap.delete()

    expect(deleted).toEqual(0)
    expect(heap.peek()).toEqual(1)
    expect(heap.data).toEqual([1, 4, 3, 6])
  })
})


describe('creating and getting elements from a max heap heap', () => {
  const isLessThan = (a, b) => {
    return a < b
  }

  const heap = new Heap(isLessThan);
  
  beforeEach(() => {
    heap.__flush()
  })

  it('should be able to insert', () => {
    heap.insert(5)
    heap.insert(6)
    heap.insert(3)
    expect(heap.data).toEqual([6, 5, 3])
  })

  it('should be able to get and then re-heapify', () => {
    heap.insert(0)
    heap.insert(6)
    heap.insert(3)
    heap.insert(4)
    heap.insert(1)

    expect(heap.data).toEqual([6, 4, 3, 0, 1])

    const deleted = heap.delete()

    expect(deleted).toEqual(6)
    expect(heap.peek()).toEqual(4)
    expect(heap.data).toEqual([4, 1, 3, 0])
  })
})