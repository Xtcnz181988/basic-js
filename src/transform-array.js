const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
const flags = ['--discard-prev', '--double-prev', '--discard-next', '--double-next']

function transform(arr) {
  if (!Array.isArray(arr)) {
    console.log('Error')
    throw Error(`'arr' parameter must be an instance of the Array!`);
  }
  if (arr.length === 0) {
    return [];
  } else {
    const resArr = [];
    let checkFlag = false;
    for (let x = 0; x < arr.length; x++) {
      if (!flags.includes(arr[x])) {
        console.log('2')
        resArr.push(arr[x]);
      }
      if (arr[x] === '--discard-prev' && x !=0 && !checkFlag) {
        resArr.pop();
      }
      if (arr[x] === '--double-prev' && x!=0 && !checkFlag) {
        resArr.push(arr[x-1])
      }
      if (arr[x] === '--discard-next' && x!=arr.length-1) {
        console.log('1')
        checkFlagDiscard = true;
        x++;
        x++;
      }
      if (arr[x] === '--double-next' && x!=arr.length-1) {
        resArr.push(arr[x+1])
      }
    }
    console.log(resArr)
    return resArr;
  }
}
  // transform(['--discard-prev', 1, 2, 3])
  // transform(['--double-prev', 1, 2, 3])
  // transform([1, 2, 3, '--double-next'])
// transform([1, 2, 3, '--discard-next'])
  // if (!arr.includes('--discard-prev') && !arr.includes('--discard-next') && !arr.includes('--double-next') && !arr.includes('--double-prev')) {
  //     return arr;
  //   }
  // if (arr.indexOf('--discard-prev') === 0 || arr.indexOf('--double-prev') === 0) {
  //   return arr.splice(1, arr.length - 1);
  // }
  // if (arr.indexOf('--discard-next') === arr.length - 1 || arr.indexOf('--double-next') === arr.length - 1) {
  //   return arr.slice(0, arr.length -1);
  // }
  // // const resArr = [];
  // let checkFlagDiscard = false;
  // for (let x = 0; x < arr.length; x++) {
  //   if (!(typeof arr[x] === '--discard-next') {
  //     checkFlagDiscard = true;
  //     x++;
  //   } else if (arr[x] === )

  // }

  // if (arr.includes('--discard-next') && arr.includes('--double-prev')) {
  //   return arr.splice(0, arr.indexOf('--discard-next')-1).concat(arr.slice(arr.indexOf('--double-prev')) - 1, (arr.length - 1) - (arr.indexOf('--double-prev')))
  // }
  // if (arr.includes('--discard-next') && arr.includes)
  // // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here


module.exports = {
  transform
};
// transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]);
transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]);
// transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5])
// transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5])
                    // output: [1, 2, 3, 1337, 4, 5]