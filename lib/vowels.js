"use strict";

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

const base64Decode = (string) => new Buffer(string, 'base64').toString('ascii')

const asciiConcat = (words) => words.reduce( (total, curr, i , v) =>   {
	let index = i == 0 ? words.length -1 : i - 1;
	return total + curr + words[index].charCodeAt(0);
}, "");

const concat = (words) => words.reduce( (total, curr, i ,v) => total + '*' + curr );

const sort = (words) => words.sort( (a,b) => a.toLowerCase().localeCompare(b.toLowerCase()));

const reverseSort = (words) => sort(words).reverse();

module.exports = {isVowel,shiftVowels,shiftLastLetter, base64Encode, base64Decode, asciiConcat, sort, reverseSort, shiftVowelsFromWords, concat};
