'use strict';

var NAME = 'slack';

function exit() {
  process.exit(0);
}

var commander = require('./commander')(NAME);

function completer(line, callback) {

  var sline = NAME + ' ' + line;
  commander.complete({
  line: sline,
  cursor: sline.length
  }, function (err, results) {
    return callback(null, [results, line]);
  });
}

var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout, completer);

rl.setPrompt(NAME + '> ');
rl.prompt();

rl.on('line', function(line) {
  var args = ['node', NAME].concat(line.trim().split(' '));
  commander.parse(args)
  rl.prompt();
}).on('close', function() {
  console.log('Bye!');
  exit();
});
