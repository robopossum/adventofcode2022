module.exports = function (trash, contents) {
  let [input, rows] = contents.split('\n\n');
  const stacks = [];
  input.split('\n').reverse().forEach((str, i) => {
    if (!i) return;
    let j = 0;
    while (j * 4 + 1 < str.length) {
      stacks[j] = stacks[j] || '';
      stacks[j] += str[j * 4 + 1].trim();
      j++;
    }
  });
  rows = rows.split('\n');
  rows.pop();
  rows.forEach(command => {
    let [str, num, from, to] = command.match(/move (\d+) from (\d+) to (\d+)/);
    let crates = stacks[from - 1].slice(-num);
    stacks[from - 1] = stacks[from - 1].slice(0, -num);
    stacks[to - 1] += crates;
  });
  return stacks.reduce((res, str) => res + str.slice(-1), '');
};
