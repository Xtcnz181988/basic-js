const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [...matrix].map(row => row.map(() => 0));
  // const arr = [];
  // for (let x = 0; x < matrix.length; x++) {
  //   for (let y = 0; y < matrix[x].length; y++) {
  //     count = 0;
  //     // if (x === 0  && y === 0) {
  //     //   if ()
  //     // }
  //   }
  console.log(result)
}

module.exports = {
  minesweeper
};

minesweeper([
  [true, false, false],
  [false, true, false],
  [false, false, false],
])