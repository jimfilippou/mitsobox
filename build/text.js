'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
const TEXT = exports.TEXT = text => {
  let buff = new Buffer(text, 'ucs2').toString('binary');
  return buff;
};