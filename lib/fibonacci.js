"use strict";

const PHI = 1.618033988749895

const fibonacci = (n) =>  n < 2 ? 1 : fibonacci(n-2) + fibonacci(n-1)

const getNext   = (n) => {
	let raw = ( n * PHI );
	let next = Math.floor(raw + 1);

	if(raw + 0.5 > next)
		return Math.ceil(raw);
	return Math.floor(raw);
}


module.exports =  {fibonacci, getNext};
