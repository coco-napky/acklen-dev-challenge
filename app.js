"use strict";


//dependencies
const axios     = require('axios'),
      guid      = require('guid'),
      fibonacci = require('./fibonacci'),
      compose   = require('./lib/functional.js').compose,
      assert    = require('chai').assert,
      pipe      = require('./lib/functional.js').pipe;

const baseUrl = 'http://internal-devchallenge-2-dev.apphb.com/';
let url = `${baseUrl}/values/${guid.raw()}`;


const isVowel = (v) => {
	let vowels = ['a','e','i','o','u','y'];
	vowels = [...vowels, ...vowels.map( s => s.toUpperCase())];

	//if any, then true
	for(let i = vowels.length - 1; i >= 0; --i)
		if(v == vowels[i])
			return true;

	return false;
}


const shiftVowels = (word) => {
	let result = word.split("");

	for (let i = 0; i < result.length; ++i) {
		let current = result[i];

		if(!isVowel(current))
			continue;

		if(i == result.length - 1){
			let stringified = result.reduce( (prev, curr, i, v) => prev + curr);
			result = shiftLastLetter(stringified).split("");
		}
		else{
			result[i] = result[i + 1];
			result[i++ + 1] = current;
		}
	}
	return result.reduce( (prev, curr, i, v) => prev + curr);
}

const shiftLastLetter = (word) => {
	let result = word.split(""),
	    last   = result[result.length - 1];

	for (let i = result.length - 1; i >= 0; i--)
		if( i == 0)
			result[i] = last;
		else
			result[i] = result[i - 1];

	return result.reduce( (prev, curr, i, v) => prev + curr);
}





