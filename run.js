if (process.argv.length < 4) {
    console.error('Launch run.js like "node run.js <day> <part>"');
    process.exit();
}
var day  = process.argv[2];
var part = process.argv[3];
console.log('Running Day ' + day + ' Part ' + part);

const fs = require('fs');

fs.readFile('./days/' + day + '/input', 'utf8', function(err, contents) {
  var inputs = contents.split('\n');
  if (!inputs[inputs.length - 1]) {
    inputs.pop(); //Removes last blank line
  }

  var script = require('./days/' + day + '/part' + part + '.js');
  var start = Date.now();
  var result = script(inputs, contents);
  var runtime = Date.now() - start;
  console.log('Got result: ' + result + ' in ' + runtime + ' milliseconds');
});
