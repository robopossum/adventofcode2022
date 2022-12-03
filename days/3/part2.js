const alpha = '-abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
module.exports = function (input, contents) {
  let tot = 0;
  for (let i = 0; i < input.length; i += 3) {
    let regex = new RegExp('[' + input[i] + ']', 'g');
    let regex2 = new RegExp('[' + input[i + 1].match(regex).join('') + ']');
    tot += alpha.indexOf(input[i + 2].match(regex2)[0]);
  }
  return tot;
};
