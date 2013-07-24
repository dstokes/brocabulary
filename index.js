var fs = require('fs')
  , listenshtein = require('listenshtein');

var dictFile = __dirname + '/data/dict';

function rand(l) {
  return Math.floor(Math.random()*l);
}

function brocabulary(cb) {
  var self  = {}
    , dict = []
    , s = fs.createReadStream(dictFile);

  self.random = function() {
    return dict[rand(dict.length)];
  };

  self.broify = function(words) {
    if(typeof words === 'string') words = words.split(' ');
    for(var i = 0, l = words.length; i < l; i++) {
      var match = listenshtein(words[i], dict, 3);
      if(match) words[i] = match;
    }
    return words.join(' ');
  };

  cb = (cb || function() {});
  s.on('end', function() { cb(self); });
  s.on('data', function(d) {
    d.toString().split(/\n/).forEach(function(word) {
      dict.push(word);
    });
  });
}

module.exports = brocabulary;
