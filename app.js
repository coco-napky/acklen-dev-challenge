"use strict";


//dependencies
const axios     = require('axios'),
      guid      = require('guid'),
      fibonacci = require('./lib/fibonacci'),
      compose   = require('./lib/functional.js').compose,
      assert    = require('chai').assert,
      pipe      = require('./lib/functional.js').pipe;

const baseUrl = 'http://internal-devchallenge-2-dev.apphb.com/';
let url       = `${baseUrl}/values/${guid.raw()}`;

console.log('this is chuck testa');
