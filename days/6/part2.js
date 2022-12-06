module.exports = function (trash, contents) {
  let i = 13;
  while (i < contents.length - 1) {
    if(!/(.).*\1/.test(contents.substring(i - 13, i + 1))) {
      return i + 1;
    }
    i++;
  }
};
