"use strict";


//dependencies
const guid       = require('guid'),
      encrypthor = require('./lib/encrypthor'),
      vowels     = require('./lib/vowels'),
      axios      = require('axios').create({
  baseURL: 'http://internal-devchallenge-2-dev.apphb.com/',
  timeout: 10000,
  headers: {'Accept': 'application/json'}
});

const currentGuid = guid.raw();

let urlGet        = `values/${currentGuid}`;
let urlTest       = `encoded/${currentGuid}`;

axios.get(urlGet).then( response => {

	let encoded = encrypthor.encode(response.data.words, response.data.algorithm, response.data.startingFibonacciNumber);

	if(response.data.algorithm == 'IronMan' ||  response.data.algorithm == 'TheIncredibleHulk'){
		axios.get( `${urlTest}/${response.data.algorithm}`).then(testResponse => {
			if(testResponse.data.encoded == encoded)
				console.log('SUCCESS');
			else
				console.log('FAILURE');
		});
	}
	console.log('Checkpoint:', response.data.algorithm)
});
