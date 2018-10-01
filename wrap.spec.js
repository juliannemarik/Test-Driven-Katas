const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap("", 10)).to.equal("");
  });

  it('returns correct string if max length is 1', () => {
    expect(wrap("hello world", 1)).to.equal("h\ne\nl\nl\no\n \nw\no\nr\nl\nd\n");
  });

  it('Returns empty string if max length is 0', () => {
    expect(wrap("hello world", 0)).to.equal("");
  });

  it('Returns entire string if maxLength >= string length', () => {
    expect(wrap("hello", 10)).to.equal("hello");
  });

  it('no line is greater than maxLength', () => {
    expect(wrap("hello world", 10)).to.equal("hello worl\nd");
  });



});
