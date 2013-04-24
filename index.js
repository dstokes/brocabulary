var fs = require('fs')
  , dictFile = __dirname + '/data/dict';

function brocabulary(cb) {
  var self  = {}
    , dict = []
    , s = fs.createReadStream(dictFile);

  self.random = function() {
    return dict[Math.floor(Math.random()*dict.length)];
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
