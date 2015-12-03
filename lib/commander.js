'use strict';

var program = require('commander-completion');

module.exports = function(name) {
  program.name = name;

  program
    .command('message <channel> <content>')
    .completion(function(info, cb) {
      var result = [];
      if (!info.word.value) {
        return cb(null, ['abc', 'def']);
      }

      if (info.word.value === 'a') {
        result.push('abc');
      } else {
        result.push('def');
      }
      return cb(null, result);
    })
    .action(function(channel, content) {
      console.log('Sending message "%s" to channel #%s', content, channel);
    });

  program
    .command('cd <channel>')
    .completion(function(info, cb) {
      var result = [];
      if (!info.word.value) {
        return cb(null, ['abc', 'def']);
      }

      if (info.word.value === 'a') {
        result.push('abc');
      } else {
        result.push('def');
      }
      return cb(null, result);
    })
    .action(function(channel) {
      console.log('CD channel #%s', channel);
    });

  program
    .command('channels')
    .action(function() {
      console.log('List channels');
    });

  program
    .command('listen <channel>')
    .action(function(channel) {
      console.log('Listen to channel #%s', channel);
    });
  return program;
};
