const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const res = {};
  names.forEach(el => {
    if (res.hasOwnProperty(el)) {
      console.log('1')
      res[el + `(${res[el]})`] = 1
      res[el] = res[el] + 1;
    } else {
      console.log('2')
      res[el] = 1;
    }
      // res[el] = res[el] ? (res[el] + 1 && res[el+`(${res[el - 1]})`]) : 1; 
    // let count = 0;
    // if (res.includes(el)) {
    //   count++;
    //   res.push(el + `(${count})`)
    // } else {
    //   res.push(el);
    // }
    // console.log(el);
    // if (res[el] === res[el]){
    //   console.log('2')
    //   res[el] = res[el] + 1;
    //   res[el + `(${res[el] - 1})`] = 1;
    //   console.log(res)
    // } else {
    //   console.log('1')
    //   res[el] = 1;
    //   console.log(res);
    // }
    // 
  })
  // const arrRes = []
  return Object.keys(res);
  
}

module.exports = {
  renameFiles
};
renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc']);