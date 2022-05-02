const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let res = {};
  domains.forEach(el => {
    const tempArr = el.split('.').reverse();
    console.log(tempArr)
    const count = tempArr.length;
    for (let x= 0; x < count; x++) {
      // console.log(tempArr.slice(0, x));
      res['.' + tempArr.join('.')] =  res['.' + tempArr.join('.')] ?  res['.' + tempArr.join('.')] + 1 : 1;
      tempArr.pop();
      
    //   console.log(tempArr.join('.'))
    }
  })
   return res;
}

module.exports = {
  getDNSStats
};

getDNSStats(['epam.com', 'info.epam.com']);
getDNSStats(['epam.com']);