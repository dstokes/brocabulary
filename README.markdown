brocabulary
===========

A dictionary for the bro in all of us.

[![NPM](https://nodei.co/npm/brocabulary.png?downloads=true)](https://nodei.co/npm/brocabulary/)  

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
-------------

Broify the words in a string based on levenshtein dist

install
=======

With [npm](http://npmjs.org) do:

```
npm install brocabulary
```
