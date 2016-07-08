"use strict";

const vowels = require('../lib/vowels.js'),
      assert = require('chai').assert;


assert.equal(vowels.isLowerCase('A'), false);
assert.equal(vowels.isLowerCase('c'), true);
assert.equal(vowels.isLowerCase('y'), true);
assert.equal(vowels.isLowerCase('F'), false);
assert.equal(vowels.isLowerCase('z'), true);

assert.equal(vowels.isConsonant('A'), false);
assert.equal(vowels.isConsonant('c'), true);
assert.equal(vowels.isConsonant('y'), false);
assert.equal(vowels.isConsonant('F'), true);

assert.equal(vowels.isVowel('A'), true);
assert.equal(vowels.isVowel('B'), false);
assert.equal(vowels.isVowel('y'), true);

assert.equal(vowels.shiftVowels('hEllo'),'ohlEl');
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


arrayCompare = vowels.scan('cAtSrUlEdOgSdRoOl').sort().toString() === ['cAtS', 'rUlE', 'dOgS', 'dRoOl'].sort().toString();
assert.equal( arrayCompare, true);

arrayCompare = vowels.scan('cHuck').toString() === ['cHuck'].toString();
assert.equal( arrayCompare, true);

arrayCompare = vowels.scanWords(['cHuck', 'cAtSrUlEdOgSdRoOl', 'testa']).sort().toString() === ['cHuck','cAtS', 'rUlE', 'dOgS', 'dRoOl', 'testa'].sort().toString();
assert.equal( arrayCompare, true);

arrayCompare = vowels.scanWords(['cHuck']).toString() === ['cHuck'].toString();
assert.equal( arrayCompare, true);

arrayCompare = vowels.scanWords(['cHuck']).toString() === ['cHuck'].toString();
assert.equal( arrayCompare, true);

arrayCompare = vowels.fibonacciReplacement(['dog', 'cat', 'bird'], 5).toString() === ['d5g', 'c8t', 'b13rd'].toString();
assert.equal( arrayCompare, true);

arrayCompare = vowels.consonantCasing(['DoG', 'CaT', 'BiRd']).toString() === ['Dog', 'Cat', 'BirD'].toString();
assert.equal( arrayCompare, true);



console.log('*** vowels test passed ***');
