const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let n = str.length;
  let res = '';
    for (let i = 0; i < n; i++) {
      // const temp = [];
      let count = 1;
      while (i < n - 1 && str[i] == str[i+1]) {
        count++;
        i++;
        }
        if (count > 1){
          res = res + count + str[i];
        } else {
          res = res + str[i];
        }
          
          // temp.push(str[i]);
          // res.push(temp);
        }
    console.log(res)
    return res;
  // const arr = str.split('');
  // const res = {};
  // arr.forEach(el => {
  //   res[el] = res[el] ? res[el] + 1 : 1;
  // })
  // let resStr = '';
  // for(key in res) {
  //   resStr = resStr + res[key] + key; 
  // }
  // return resStr
}

module.exports = {
  encodeLine
};
encodeLine('aaaatttt')