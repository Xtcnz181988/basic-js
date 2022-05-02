const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const tempArr = [];
  const indexArr = [];

  arr.forEach ((el, ind) => {
    if (el === -1) {
      indexArr.push(ind);
    } else {
      tempArr.push(el);
    }
  })
  const sortArr = tempArr.sort((a, b) => a - b);
    const res = [];
    console.log(sortArr)
  for (let x = 0; x < arr.length; x++) {
    if (indexArr.includes(x)) {
      res.push(-1);
      sortArr.unshift('')
    } else {
      res.push(sortArr[x])
    }
  }
console.log(res);
return res;
}

module.exports = {
  sortByHeight
};
 sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]);
// sortByHeight([-1, -1, -1, -1, -1]); 
// sortByHeight([23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3])
// sortByHeight([4, 2, 9, 11, 2, 16]);