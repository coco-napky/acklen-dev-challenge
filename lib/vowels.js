"use strict";

const bank      = require('./bank');
const fibonacci = require('./fibonacci').fibonacci;
const getNext   = require('./fibonacci').getNext;

const curriedLetterCheck = letters => {
	letters = [...letters, ...letters.map( s => s.toUpperCase())];
	return letter => letters.some( current => letter === current )
}

const isVowel     = curriedLetterCheck( [ 'a', 'e', 'i', 'o', 'u', 'y' ] );
const isConsonant = curriedLetterCheck( ['b', 'c', 'd', 'f', 'g' , 'h', 'j', 'k',
                                         'l', 'm', 'n', 'p' , 'q', 'r', 's', 't',
                                         'v', 'w', 'x', 'z' ] );

const isLowerCase = letter => letter === letter.toLowerCase();

const fibonacciReplacement = (words, startingFibonacci) => {
	let current  = startingFibonacci;
	return words.map( word =>
		word.split('').reduce( (total, letter) =>{

			if(isVowel(letter)){
				let prev = current;
				current  = getNext(current);
				return total + prev;
			}
			return total + letter;
		}, "")
	);
}

const scan = (word) => {
	let lowerCased = word.toLowerCase();
	let tokens     =  bank.reduce( (found, current, i, v) => {
		let index = lowerCased.indexOf(current);

		if(index > -1)
			found.push({index, "word": current});
		return found
	}, []);

	let result = tokens.map( token => word.substring(token.index, token.index + token.word.length));
	return result.length > 1 ? result : [word]
}

const scanWords = (words) => words.reduce( (found, word, i) => [...found, ...scan(word)] , [])

const shiftVowels = (word) => {
	let result = word.split("");

	for (let i = 0; i < result.length; ++i) {
		let current = result[i];

		if(!isVowel(current))
			continue;

		if(i == result.length - 1){
			let stringified = result.reduce( (total, curr, i, v) => total + curr);
			result = shiftLastLetter(stringified).split("");
		}
		else{
			result[i] = result[i + 1];
			result[i++ + 1] = current;
		}
	}
	return result.reduce( (total, curr, i, v) => total + curr);
}

const shiftLastLetter = (word) => {
	let result = word.split(""),
	    last   = result[result.length - 1];

	for (let i = result.length - 1; i >= 0; i--)
		if( i == 0)
			result[i] = last;
		else
			result[i] = result[i - 1];

	return result.reduce( (total, curr, i, v) => total + curr);
}

const shiftVowelsFromWords = (words) => words.map(shiftVowels);

const base64Encode = (string) => new Buffer(string).toString('base64')

const base64Decode = (string) => new Buffer(string, 'base64').toString('utf8')

const asciiConcat = (words) => words.reduce( (total, curr, i , v) =>   {
	let index = i == 0 ? words.length -1 : i - 1;
	return total + curr + words[index].charCodeAt(0);
}, "");

const concat = (words) => words.reduce( (total, curr, i ,v) => total + '*' + curr );

const sort = (words) => words.sort( (a,b) => a.toLowerCase().localeCompare(b.toLowerCase()));

const reverseSort = (words) => sort(words).reverse();

const consonantCasing = words => {
	let lowerCase      = isLowerCase(words[0].charAt(0));
	let first =  true;
	for(let wordIndex in words){
		let letters = words[wordIndex].split("");

		for(let letterIndex in letters){
			let letter = letters[letterIndex];

			if(isConsonant(letter)){

				if(first){
					letters[letterIndex] = lowerCase ? letter.toLowerCase() : letter.toUpperCase();
				}else{
					letters[letterIndex] = lowerCase ? letter.toUpperCase() : letter.toLowerCase();
					lowerCase = !lowerCase;
				}
				first = false;
			}
		}
		words[wordIndex] = letters.reduce( (total, current) =>  total + current, '');
	}
	return words;
}

module.exports = {isVowel, shiftVowels, shiftLastLetter, base64Encode,
                  base64Decode, asciiConcat, sort, reverseSort,
                  shiftVowelsFromWords, concat, scan, scanWords, fibonacciReplacement,
                  isConsonant, isLowerCase, consonantCasing};
