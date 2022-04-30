const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`s
 *
 */
function countCats(arr) {
  let cats = 0;
  let count = [...arr];
  count.forEach(i => {
    i.forEach(j => {
      if(j === '^^') {
        cats++;
      }
    })
  })
  return cats;
}

module.exports = {
  countCats
};
