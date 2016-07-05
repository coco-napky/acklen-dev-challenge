"use strict";

const vowels = require('../lib/vowels.js'),
      assert = require('chai').assert;


assert.equal(vowels.shiftVowels('hEllo'),'ohlEl');
assert.equal(vowels.shiftVowels('bOok'),'boOk');
assert.equal(vowels.shiftVowels('read'),'raed');
assert.equal(vowels.shiftVowels('NeEd'),'NEed');
assert.equal(vowels.shiftVowels('paliNdromE'),'EplaNidrmo');
assert.equal(vowels.shiftVowels('happy'),'yhpap');

assert.equal(vowels.asciiConcat(['dog', 'cat', 'bird']),'dog98cat100bird99');

assert.equal(vowels.base64Encode('dog98cat100bird99'),'ZG9nOThjYXQxMDBiaXJkOTk=');
assert.equal(vowels.base64Decode('QlRhMTEyQlN1TmlTZXM2NkNMb011bjY2RWVyRFhvNjdFZXJEWG82OUZsc1VINjlmUkdpaFROZU5pZzcwWVdpRmV0MTAycEhSYU9haDg5cEhSYU9haDExMg=='),
	                             'BTa112BSuNiSes66CLoMun66EerDXo67EerDXo69FlsUH69fRGihTNeNig70YWiFet102pHRaOah89pHRaOah112');

assert.equal(vowels.concat(['dog', 'cat', 'bird']), 'dog*cat*bird');

let arrayCompare = vowels.sort( ['Dog', 'cAt', 'zebra']).toString() === ['cAt', 'Dog', 'zebra'].toString();
assert.equal( arrayCompare, true);

arrayCompare = vowels.reverseSort( ['Dog', 'cAt', 'zebra']).toString() === ['zebra', 'Dog', 'cAt'].toString();
assert.equal( arrayCompare, true);

console.log('*** vowels test passed ***');
