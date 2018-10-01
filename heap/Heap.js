/**
 * @export
 * @class Heap
 * 
 * A generic implementation of heap. By passing in a compare function, a user
 * can control whether this is a min heap or a max heap.
 * 
 * The implementation is done using an array without using the +1 index on the 
 * array for the left and right child.
 */

module.exports = class Heap {

  /**
   * @constructor
   * @param {function(any, any) -> boolean} compare if it returns true, a swap occurs
   * 
   */

  constructor(compare){
    this.data = []
    this.compare = compare

    if (typeof compare !== "Function"){
      return null;
    }
  }

  /**
   * @private
   * @function __left
   * @description get the left child based on the given index
   * 
   * @param {int} index 
   * @returns {int}
   * 
   */

  __left(index){
    return (index * 2) + 1
  }

  /**
   * @private
   * @function __right
   * @description get the right child based on the given index
   * 
   * @param {int} index 
   * @returns {int}
   * 
   */

  __right(index){
    return (index * 2) + 2
  }

  /**
   * @private
   * @function __parent
   * @description get the parent child based on the given index
   * 
   * @param {int} index 
   * @returns {int}
   * 
   */

  __parent(index){
    return Math.floor((index - 1) / 2);
  }

  /**
   * @private
   * @function __flush
   * @description flushes the data of this heap
   * 
   */

  __flush(){
    this.data = []
  }

  /**
   * @private
   * @function swap
   * @description swaps elements firstPosition and secondPosition in this.data
   * 
   * @param {int} firstPosition 
   * @param {int} secondPosition 
   * 
   */

  swap(firstPosition, secondPosition){
    const temp = this.data[firstPosition]
    this.data[firstPosition] = this.data[secondPosition]
    this.data[secondPosition] = temp
  }

  /**
   *  
   * @function peek
   * @description gets the first element of the heap 
   * 
   * @returns {any | null} null is returns if this.data is empty
   * 
   */

  peek(){
    return this.data.length > 0
      ? this.data[0]
      : null;
  }

  /**
   *  
   * @function delete
   * @description removes and returns the first element of the heap or null if it's empty.
   *              In the bubble down after the removal, the compare function is called as
   *              with (data[position], data[left]) and then (data[position], data[right]).
   *              If either of these return truthy, the element at position is swapped.
   * 
   * @returns {any | null} null if this.data is empty
   * 
   */

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
      } else if (this.compare(this.data[position], this.data[right])){
        this.swap(position, right)
        position = right
      } else {
        break;
      }
    }

    return ejected
  }

  /**
   *  
   * @function insert
   * @description removes and returns the first element of the heap or null if it's empty.
   *              In the bubble up the compare function is called as (data[position], data[parent]).
   *              If the compare return truthy, the element at position is swapped with the parent.
   * 
   * @returns {any | null} null if this.data is empty
   * 
   */

  insert(node){
    this.data.push(node);
    let position = this.data.length - 1

    while (true){
      const parent = this.__parent(position)

      if (this.compare(this.data[parent], this.data[position])){
        this.swap(parent, position)
        position = parent
      } else {
        break;
      }
    }
  }
}