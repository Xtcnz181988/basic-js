const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const strArray1 = s1.split('');
  const strArray2 = s2.split('');
  const resultArray = [];
  console.log(strArray1);
  console.log(strArray2);
  let obj = {};
  strArray1.forEach(el => {
    obj[el] = obj[el] ? obj[el] + 1 : 1;
  });
  // let obj = strArray1.reduce((el, i) => {
  //   el[i] = el[i] ? el[i] + 1 : 1;
  // }, {});
  console.log(obj);

  strArray2.forEach(el => {
    if(obj[el] && obj[el] > 0) {
      resultArray.push(el);
      obj[el]-=1;
    }
  })
  console.log(resultArray)
  // let obj = strArray1.reduce((acc, i) => {
  //   acc[i] = acc[i] ? acc[i] + 1 : 1
  // },{})
  
  // for (let index = 0; index < strArray2.length; index++) {
  //   const element = array[index];
  //   resultArray.push(element);
  //   obj[element] -= 1;
  // }
  return resultArray.length
}

module.exports = {
  getCommonCharacterCount
};
getCommonCharacterCount('aabc', 'adcaa');