"use strict";

const functional = require('../lib/functional.js'),
      compose    = functional.compose,
      pipe       = functional.pipe,
      assert     = require('chai').assert;

//base functions
const add1 = (x) => x + 1;
const add2 = (x) => x + 2;

// add3 = add2(add1(x));
const add3 = compose(add2, add1);

//add6  = add1 -> add2 -> add3
const add6 = pipe(add1,add2,add3);

assert.equal(add3(3), 6);
assert.equal(add3(33), 36);
assert.equal(add3(55), 58);

assert.equal(add6(1), 7);
assert.equal(add6(10), 16);
assert.equal(add6(100), 106);

console.log('functional tests passed');