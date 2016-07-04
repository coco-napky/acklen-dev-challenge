const assert    = require('chai').assert,
      fibonacci = require('../fibonacci');

assert.equal(fibonacci(0), 1);
assert.equal(fibonacci(1), 1);
assert.equal(fibonacci(16), 1597);
assert.equal(fibonacci(10), 89);
assert.equal(fibonacci(9), 55);

console.log('fibonacci tests passed');