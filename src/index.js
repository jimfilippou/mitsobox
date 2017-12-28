import FFI from 'ffi';
import { TEXT } from './text';

const user32 = new FFI.Library('user32', {
  MessageBoxW: ['int32', ['int32', 'string', 'string', 'int32']]
});

export const ok = async (title, message) => await user32.MessageBoxW(0, TEXT(message), TEXT(title), 0)

export const okCancel = async (title, message) => {
  let response = await user32.MessageBoxW(0, TEXT(message), TEXT(title), 1);
  return response == 1 ? 'OK' : 'CANCEL'
};

export const abortRetryIgnore = async (title, message) => {
  let response = await user32.MessageBoxW(0, TEXT(message), TEXT(title), 2);
  return response == 3 ? 'ABORT' : response == 4 ? 'RETRY' : 'IGNORE'
};
