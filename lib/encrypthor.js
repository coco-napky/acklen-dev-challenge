"use strict";

const pipe = require('./functional').pipe;
const vowels = require('./vowels');

const ironMan = pipe(vowels.sort, vowels.shiftVowelsFromWords, vowels.asciiConcat, vowels.base64Encode);

const theIncredibleHulk = pipe(vowels.shiftVowelsFromWords, vowels.reverseSort, vowels.concat, vowels.base64Encode);

const encode = (words, algorithm, fibonacci) => {
	switch(algorithm){
        case 'IronMan' : return ironMan(words);
        break;
        case 'TheIncredibleHulk' : return  theIncredibleHulk(words);
        break;
        case 'Thor' : return 'foo';
        break;
        case 'CaptainAmerica' : return 'bar';
        break;
        default: return 'error';
        break;
    }
}



module.exports =  {ironMan, theIncredibleHulk, encode};