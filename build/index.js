'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OK_CANCEL = exports.OK = undefined;

var _ffi = require('ffi');

var _ffi2 = _interopRequireDefault(_ffi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TEXT = function TEXT(text) {
  return new Buffer(text, 'ucs2').toString('binary');
};

var user32 = new _ffi2.default.Library('user32', {
  'MessageBoxW': ['int32', ['int32', 'string', 'string', 'int32']]
});

var OK = exports.OK = function OK(message, title) {
  return user32.MessageBoxW(0, TEXT(message), TEXT(title), 0);
};

var OK_CANCEL = exports.OK_CANCEL = function OK_CANCEL(message, title) {
  return new Promise(function (resolve, reject) {
    try {
      resolve(user32.MessageBoxW(0, TEXT(message), TEXT(title), 1) == 1 ? 'OK' : 'CANCEL');
    } catch (error) {
      reject(error);
    }
  });
};