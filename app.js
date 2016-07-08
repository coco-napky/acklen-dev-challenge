"use strict";

//dependencies
const guid       = require('guid'),
      encrypthor = require('./lib/encrypthor'),
      axios      = require('axios').create({
          baseURL: 'http://internal-devchallenge-2-dev.apphb.com/',
          timeout: 10000,
          headers: {'Accept': 'application/json'}
      });


let index    = 0;
let requests = [];
let interval = setInterval( () =>{

    if(requests.length >= 20){
        requests.map( request => {
            const urlTest  = `encoded/${request.guid}`;

            request.promise.then( response =>
                axios.get( `${urlTest}/${response.data.algorithm}`).then( testResponse => {
                    let encoded = encrypthor.encode(response.data.words, response.data.algorithm, response.data.startingFibonacciNumber);
                    return {result: encoded, encoded: testResponse.data.encoded, algorithm: response.data.algorithm};
                })
            ).then( value => console.log(++index, value.algorithm, value.result == value.encoded));
        });
        clearInterval(interval);
    }else{
        const currentGuid = guid.raw();
        const urlGet      = `values/${currentGuid}`;
        requests.push({promise : axios.get(urlGet), guid: currentGuid});
        console.log('request : ', requests.length);
    }
}, 200);
