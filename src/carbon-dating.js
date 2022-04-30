const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  console.log('1')
  console.log (typeof sampleActivity != 'string')
  console.log(sampleActivity <= 0)
  console.log(sampleActivity > 15)
  console.log(isNaN(Number((sampleActivity))))
  console.log(typeof sampleActivity)
  
  // console.log(parseFloat(sampleActivity))
  // throw new NotImplementedError('Not implemented');
  if (typeof sampleActivity !== 'string' || sampleActivity <= 0 || sampleActivity > 15  || !parseFloat(sampleActivity)) {
    console.log('0')
    return false;
  } 
    console.log('result')
    console.log(Math.ceil(Math.log((MODERN_ACTIVITY / parseFloat(sampleActivity))) * (HALF_LIFE_PERIOD / Math.log(2))))
    return Math.ceil(Math.log((MODERN_ACTIVITY / parseFloat(sampleActivity))) * (HALF_LIFE_PERIOD / Math.log(2)))
  
}

module.exports = {
  dateSample
};

// dateSample('1');