const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
 const arr = email.split('').reverse();
 for (let x = 0; x < arr.length; x++) {
   if (arr[x] === '@') {
     console.log('да')
     return (arr.slice(0, x).reverse().join(''));
   }
 }
}

module.exports = {
  getEmailDomain
};
getEmailDomain('very.unusual.@.unusual.com@usual.com');