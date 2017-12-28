'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.abortRetryIgnore = exports.okCancel = exports.ok = undefined;

var _ffi = require('ffi');

var _ffi2 = _interopRequireDefault(_ffi);

var _text = require('./text');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const user32 = new _ffi2.default.Library('user32', {
  MessageBoxW: ['int32', ['int32', 'string', 'string', 'int32']]
});

const ok = exports.ok = async (title, message) => await user32.MessageBoxW(0, (0, _text.TEXT)(message), (0, _text.TEXT)(title), 0);

const okCancel = exports.okCancel = async (title, message) => {
  let response = await user32.MessageBoxW(0, (0, _text.TEXT)(message), (0, _text.TEXT)(title), 1);
  return response == 1 ? 'OK' : 'CANCEL';
};

const abortRetryIgnore = exports.abortRetryIgnore = async (title, message) => {
  let response = await user32.MessageBoxW(0, (0, _text.TEXT)(message), (0, _text.TEXT)(title), 2);
  return response == 3 ? 'ABORT' : response == 4 ? 'RETRY' : 'IGNORE';
};