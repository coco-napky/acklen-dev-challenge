const assert    = require('chai').assert,
	  getNext = require('../lib/fibonacci').getNext;
      fibonacci = require('../lib/fibonacci').fibonacci;

assert.equal(fibonacci(0), 1);
assert.equal(fibonacci(1), 1);
assert.equal(fibonacci(16), 1597);
assert.equal(fibonacci(10), 89);
assert.equal(fibonacci(9), 55);

assert.equal(getNext(2), 3);
assert.equal(getNext(3), 5);
assert.equal(getNext(5), 8);
assert.equal(getNext(8), 13);
assert.equal(getNext(21), 34);
assert.equal(getNext(55), 89);
assert.equal(getNext(89), 144);
assert.equal(getNext(233), 377);
assert.equal(getNext(377), 610);

console.log('*** fibonacci tests passed ***');