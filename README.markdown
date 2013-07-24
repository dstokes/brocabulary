brocabulary
===========

A dictionary for the bro in all of us.

example
=======

    var brocabulary = require('brocabulary');
    brocabulary(function(b) {
      console.log(b.random());  
    });

output:

    brofessional

methods
=======

brocabulary(cb)
---------------

Read the brotabase and call cb with the brocabulary handle

brohandle
=========

b.random()
----------

Return a random broism

b.broify(str)
----------

Broify the words in a string based on levenshtein dist
