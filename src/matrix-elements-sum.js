const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  let arr = [];
  for (let x = 0; x < matrix.length; x++) {
    
    for (let y = 0; y < matrix[x].length; y++) {
      if (x === 0) {
         sum = sum +matrix[x][y];
      } else if (matrix[x - 1][y] != 0) {
        sum = sum + matrix[x][y];
      }
      // } else if (matrix[x - 1][y] != 0) {
      //   sum = sum + matrix[x][y]
      // }
      // if(matrix[x - 1][y] != 0) {
      //   sum = sum + matrix[x][y];
      // }
    }
  }
  //  arr.forEach(elP => {
  //    for (let x = 0; x < elP.length; x++) {
  //     if (elP[x - 1] != 0) {
  //       sum = sum + elP[x];
  //       // console.log(sum)
  //     }
  //    }
  //  })
   console.log(sum)
   return sum;
 }


module.exports = {
  getMatrixElementsSum
};
getMatrixElementsSum([
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
])

getMatrixElementsSum([
  [1, 1, 1],
  [2, 2, 2],
  [3, 3, 3]
])