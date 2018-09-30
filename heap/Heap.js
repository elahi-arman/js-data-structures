module.exports = class MinHeap {
  constructor(compare){
    this.data = []
    this.compare = compare

    if (typeof compare !== "Function"){
      return null;
    }
  }

  __left(index){
    return (index * 2) + 1
  }

  __right(index){
    return (index * 2) + 2
  }

  __parent(index){
    return Math.floor((index - 1) / 2);
  }

  __flush(){
    this.data = []
  }

  swap(firstPosition, secondPosition){
    const temp = this.data[firstPosition]
    this.data[firstPosition] = this.data[secondPosition]
    this.data[secondPosition] = temp
  }

  peek(){
    return this.data.length > 0
      ? this.data[0]
      : null;
  }

  delete(){
    if(this.data.length < 0){
      return null;
    }

    const ejected = this.data.shift()
    let last = this.data.pop()
    this.data.unshift(last)

    let position = 0;

    while (true){
      const left = this.__left(position)
      const right = this.__right(position)

      if (this.compare(this.data[position], this.data[left])){
        this.swap(position, left)
        position = left
      } else if (this.compare(this.data[position] > this.data[right])){
        this.swap(position, right)
        position = right
      } else {
        break;
      }
    }

    return ejected
  }

  insert(node){
    this.data.push(node);
    let position = this.data.length - 1

    while (true){
      const parent = this.__parent(position)

      if (parent < 0){
        break;
      }

      if (this.compare(this.data[parent],this.data[position])){
        this.swap(parent, position)
        position = parent
      } else {
        break;
      }
    }
  }
}