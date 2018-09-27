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

module.exports = ({id, data, edges}) => ({id, data, edges: edges || []})
