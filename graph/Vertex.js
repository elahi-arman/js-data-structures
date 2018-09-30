/**
 * @typedef Vertex
 * @prop {any} id
 * @prop {any} data
 * 
 */

/**
 * 
 * @function Vertex
 * @description creates a vertex
 * 
 * @param {any} id 
 * @param {any} data 
 * 
 */

module.exports = {
  Vertex: ({id, data, edges, ...other}) => ({id, data, edges: edges || [], ...other}),
  hasVertex: (set, id) => {
    for (let i = 0; i < set.length; i++){
      if (set[i].id === id){
        return true;
      }
    }
    return false
  }
}
