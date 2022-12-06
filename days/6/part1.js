module.exports = function (trash, contents) {
  let i = 3;
  while (i < contents.length - 1) {
    if(!/(.).*\1/.test(contents.substring(i - 3, i + 1))) {
      return i + 1;
    }
    i++;
  }
};
