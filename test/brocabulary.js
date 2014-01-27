var test = require('tape')
  , assert = require('assert')
  , brocabulary = require('../');

test('broifys strings', function(t) {
  var to = setTimeout(function () {
    assert.fail('never finished');
  }, 15000);

  brocabulary(function(b) {
    clearTimeout(to);
    assert.ok(b.random().length);
    assert(b.broify('tuxedo') === 'Tuxedbro');
    t.end();
  });
});
