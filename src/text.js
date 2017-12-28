export const TEXT = text => {
  let buff = new Buffer(text, 'ucs2').toString('binary');
  return buff;
};