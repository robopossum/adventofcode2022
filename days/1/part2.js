module.exports = function (input, contents) {
  return contents
    .split('\n\n')
    .map(group => group.split('\n').reduce((i, j) => i + (parseInt(j) || 0), 0))
    .sort((a, b) => (b > a) * 2 - 1)
    .slice(0, 3)
    .reduce((i, j) => i + j, 0);
};
