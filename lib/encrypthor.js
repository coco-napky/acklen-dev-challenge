"use strict";

const pipe   = require('./functional').pipe;
const vowels = require('./vowels');

const ironMan = pipe(vowels.sort, vowels.shiftVowelsFromWords, vowels.asciiConcat, vowels.base64Encode);

const theIncredibleHulk = pipe(vowels.shiftVowelsFromWords, vowels.reverseSort, vowels.concat, vowels.base64Encode);

const thor = (words, fibonacci) => {

    let scanned  = vowels.scanWords(words);
    let sorted   = vowels.sort(scanned);
    let cased    = vowels.consonantCasing(sorted);
    let replaced = vowels.fibonacciReplacement(sorted, fibonacci);
    let concatenated = vowels.concat(replaced);
    return  vowels.base64Encode(concatenated);
}

const captainAmerica = (words, fibonacci) => {

    let shifted  = vowels.shiftVowelsFromWords(words);
    let sorted   = vowels.reverseSort(shifted);
    let replaced = vowels.fibonacciReplacement(sorted, fibonacci);
    let concatenated = vowels.asciiConcat(replaced);
    return  vowels.base64Encode(concatenated);
}

const encode = (words, algorithm, fibonacci) => {
	switch(algorithm){
        case 'IronMan' : return ironMan(words);
        break;
        case 'TheIncredibleHulk' : return  theIncredibleHulk(words);
        break;
        case 'Thor' : return thor(words,fibonacci);
        break;
        case 'CaptainAmerica' : return captainAmerica(words, fibonacci);
        break;
        default: return 'error';
        break;
    }
}

module.exports =  {ironMan, theIncredibleHulk, thor, encode};