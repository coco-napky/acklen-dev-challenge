"use strict";

const functional = {};

functional.compose = function(){
  let fns = arguments;

  return function (result) {
    for (let i = fns.length - 1; i > -1; i--) {
      result = fns[i].call(this, result);
    }

    return result;
  };
};


functional.pipe = function(){
  let fns = arguments;

  return function (result) {
    for (let i = 0; i < fns.length; i++) {
      result = fns[i].call(this, result);
    }

    return result;
  };
};

module.exports = functional;