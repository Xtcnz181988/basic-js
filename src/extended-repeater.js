const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const objDefault= {
    repeatTimes: 1, 
    separator: '+', 
    addition: '', 
    additionSeparator: '|',
    additionRepeatTimes: 1,
  }
  const resArr = [];
  for (let key in options) {
    objDefault[key] = options[key]
  }
  for (i = 1; i <= objDefault.additionRepeatTimes; i++) {
    resArr.push(`${objDefault.addition}`);
  }
  console.log(resArr);
  console.log(resArr.join(`${objDefault.additionSeparator}`));
  let resStr = `${str}` + resArr.join(`${objDefault.additionSeparator}`);
  // console.log(resStr);
  let res = resStr;
  for (i = 1; i < objDefault.repeatTimes; i++) {
    // console.log(resStr);
    res = res + objDefault.separator + resStr;
    // console.log(res);
  }
  // console.log(res)
  return res;
  //   if(!options.hasOwnProperty('separator')) {
  //     console.log('нету');
  //     return resArr.join('+');
  //   } else {
  //     console.log('есть')
  //     return resArr.join(`${options.separator}`)
  //   }
  // } else {
  //   const resArr = [];

  // }
    
  // // const arr = [];
  // // for (let i = 1; i < options.additionRepeatTimes; i++) {
  // //   arr.push(options.addition)
  // // }
  // // const arr1 = [];
  // }
}

module.exports = {
  repeater
};
repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' });