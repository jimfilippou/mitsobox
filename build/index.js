'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.abortRetryIgnore = exports.okCancel = exports.ok = undefined;

var _ffi = require('ffi');

var _ffi2 = _interopRequireDefault(_ffi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TEXT = function TEXT(text) {
  var buff = new Buffer(text, 'ucs2').toString('binary');
  return buff;
};

var user32 = new _ffi2.default.Library('user32', {
  'MessageBoxW': ['int32', ['int32', 'string', 'string', 'int32']]
});

var ok = exports.ok = function ok(message, title) {
  return new Promise(function (resolve, reject) {
    user32.MessageBoxW(0, TEXT(message), TEXT(title), 0);
  });
};

var okCancel = exports.okCancel = function okCancel(message, title) {
  return new Promise(function (resolve, reject) {
    try {
      var response = user32.MessageBoxW(0, TEXT(message), TEXT(title), 1);
      resolve(response == 1 ? 'OK' : 'CANCEL');
    } catch (error) {
      reject(error);
    }
  });
};

var abortRetryIgnore = exports.abortRetryIgnore = function abortRetryIgnore(message, title) {
  return new Promise(function (resolve, reject) {
    try {
      var response = user32.MessageBoxW(0, TEXT(message), TEXT(title), 2);
      resolve(response == 3 ? 'ABORT' : response == 4 ? 'RETRY' : 'IGNORE');
    } catch (error) {
      reject(error);
    }
  });
};