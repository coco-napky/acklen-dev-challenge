"use strict";

const vowels = require('../lib/vowels.js'),
      assert = require('chai').assert;


assert.equal(vowels.shiftVowels('hEllo'),'ohlEl');
assert.equal(vowels.shiftVowels('bOok'),'boOk');
assert.equal(vowels.shiftVowels('read'),'raed');
assert.equal(vowels.shiftVowels('NeEd'),'NEed');
assert.equal(vowels.shiftVowels('paliNdromE'),'EplaNidrmo');
assert.equal(vowels.shiftVowels('happy'),'yhpap');

console.log('*** vowels test passed ***');
