var assert = require('assert')
  , brocabulary = require('../');

exports.brocabulary = function() {
  var to = setTimeout(function () {
    assert.fail('never finished');
  }, 15000);

  brocabulary(function(b) {
    clearTimeout(to);
    assert.ok(b.random().length);
    console.log(b.broify('tuxedo'));
    assert(b.broify('tuxedo') === 'Tuxedbro');
  });
};
