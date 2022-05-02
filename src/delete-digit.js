const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arrNum = n.toString().split('');
  let max = 0;
  // console.log(arrNum);
  for (let i = 0; i < arrNum.length; i++) {
    const tempArr = [...arrNum];
    tempArr.splice(i, 1);
    max < Number(tempArr.join('')) ? max = Number(tempArr.join('')) : max = max;
  }
  return max;
}

module.exports = {
  deleteDigit
};
deleteDigit(152)