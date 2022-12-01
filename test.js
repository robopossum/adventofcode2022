if (process.argv.length < 4) {
    console.error('Launch run.js like "node run.js <day> <part>"');
    process.exit();
}
const day  = process.argv[2];
const part = process.argv[3];
console.log('Testing Day ' + day + ' Part ' + part);

const fs = require('fs');

fs.readFile('./days/' + day + '/test', 'utf8', function(err, contents) {
  const inputs = contents.split('\n');
  if (!inputs[inputs.length - 1]) {
    inputs.pop(); //Removes last blank line
  }

  const expected = require('./days/' + day + '/expected.json');
  console.log('Expecting result: ' + expected[part]);

  var script = require('./days/' + day + '/part' + part + '.js');
  var start = Date.now();
  var result = script(inputs, contents);
  var runtime = Date.now() - start;

  console.log('Got test result: ' + result + ' in ' + runtime + ' milliseconds');
});
