
import FFI from 'ffi';

const TEXT = (text) => new Buffer(text, 'ucs2').toString('binary');

const user32 = new FFI.Library('user32', {
  'MessageBoxW': [
    'int32', ['int32', 'string', 'string', 'int32']
  ]
});

export const OK = (message, title) => {
  return user32.MessageBoxW(
    0, TEXT(message), TEXT(title), 0
  );
}

export const OK_CANCEL = (message, title) => {
  return new Promise(
    (resolve, reject) => {
      try {
        resolve(
          user32.MessageBoxW(
            0, TEXT(message), TEXT(title), 1
          ) == 1 ? 'OK' : 'CANCEL');
      } catch (error) {
        reject(error);
      }
    }
  )
}
