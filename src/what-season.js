const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!'
  }
  const winter = [1, 2, 12];
  const spring = [3, 4, 5];
  const summer = [6, 7, 8];
  const autumn = [9, 10, 11];
  // console.log(date);
  // console.log(Object.prototype.toString.call(date) === '[object Date]')
  console.log(date instanceof Date);
  // console.log(date.getMonth())
  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length > 0) {
    console.log('Invalid date!')
    throw Error('Invalid date!');
  }
  if (winter.includes(date.getMonth() + 1)) {
  return 'winter';
} else if (spring.includes(date.getMonth() + 1)) {
  return 'spring';
} else if (summer.includes(date.getMonth() + 1)) {
  return 'summer';
} else if (autumn.includes(date.getMonth() + 1)) {
  return 'autumn';
}
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};
