const alpha = '-abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
module.exports = function (input, contents) {
  return input.reduce((tot, str) => {
    let regex = new RegExp('[' + str.substring(str.length / 2) + ']');
    return tot + alpha.indexOf(str.substring(0, str.length / 2).match(regex)[0]);
  }, 0);
};
