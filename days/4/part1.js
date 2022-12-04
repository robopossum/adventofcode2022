module.exports = function (input, contents) {
  return input.map(row => row.split(',').map(sect => sect.split('-').map(i => parseInt(i)))).filter(([a, b]) => {
    return (a[0] >= b[0] && a[1] <= b[1]) || (b[0] >= a[0] && b[1] <= a[1]);
  }).length;
};
