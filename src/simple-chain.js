const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    // const length = this.chain.length;
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || ((position - 1) >= this.chain.length) || ((position -1) < 0)){
      this.chain = [];
      throw new Error(`You can't remove incorrect link!`)
    }
    this.chain.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    this.chain.reverse();
    return this;
    // remove line with error and write your code here
  },
  finishChain() {
    const finish = this.chain.join('~~');
    this.chain = [];
    return finish;
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
