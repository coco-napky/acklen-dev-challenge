"use strict";

const encrypthor = require('../lib/encrypthor.js'),
      assert     = require('chai').assert;

const ironManEncoding = 'QlRhMTEyQlN1TmlTZXM2NkNMb011bjY2RWVyRFhvNjdFZXJEWG82OUZsc1VINjlmUkdpaFROZU5pZzcwWVdpRmV0MTAycEhSYU9haDg5cEhSYU9haDExMg=='
const ironManWords    =
[
    "BaT",
    "pHaRaOh",
    "FlUsH",
    "CoLuMn",
    "eErDoX",
    "pHaRaOh",
    "eErDoX",
    "BuSiNeSs",
    "iWeFtY",
    "fRiGhTeNiNg"
]

assert.equal(encrypthor.ironMan(ironManWords), ironManEncoding);

const theIncredibleHulkEncoding = 'eWhhRUx0SCpXaHRBckF5RXVPU21rT25JRypPb3BUTnkqaHJBTSpFZ0FSRWVCYWwqRWVyRFhvKkRXb25SVmlSZSpDTG9NdW4qQXNIUmVnKkFvblNMbw==';
const theIncredibleHulkWords    =
[
  'hArM',
  'DoWnRiVeR',
  'oAnSoL',
  'AgReEaBlE',
  'eErDoX',
  'sHeRgA',
  'WhAtArEyOuSmOkInG',
  'CoLuMn',
  'hEaLtHy',
  'oOpTyN'
]

assert.equal(encrypthor.theIncredibleHulk(theIncredibleHulkWords), theIncredibleHulkEncoding);

console.log('*** encrypthor tests passed ***');
