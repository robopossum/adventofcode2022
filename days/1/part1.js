module.exports = function (input, contents) {
  return Math.max(...contents.split('\n\n').map(group => group.split('\n').reduce((i, j) => i + (parseInt(j) || 0), 0)));
};
