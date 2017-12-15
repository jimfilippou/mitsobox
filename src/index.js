
import FFI from 'ffi';

const TEXT = (text) => { 
  let buff = new Buffer(text, 'ucs2').toString('binary');
  return buff;
}

const user32 = new FFI.Library('user32', {
  'MessageBoxW': [
    'int32', ['int32', 'string', 'string', 'int32']
  ]
});

export const ok = (message, title) => {
  return new Promise(
    (resolve, reject) => {
      user32.MessageBoxW(
        0, TEXT(message), TEXT(title), 0
      );
    }
  ) 
}

export const okCancel = (message, title) => {
  return new Promise(
    (resolve, reject) => {
      try {
        let response = user32.MessageBoxW(
          0, TEXT(message), TEXT(title), 1
        )
        resolve(response == 1 ? 'OK' : 'CANCEL');
      } catch (error) {
        reject(error);
      }
    }
  )
}


export const abortRetryIgnore = (message, title) => {
  return new Promise(
    (resolve, reject) => {
      try {
        let response = user32.MessageBoxW(
          0, TEXT(message), TEXT(title), 2
        )
        resolve(response == 3 ? 'ABORT' : response == 4 ? 'RETRY' : 'IGNORE');
      } catch (error) {
        reject(error);
      }
    }
  )
}
