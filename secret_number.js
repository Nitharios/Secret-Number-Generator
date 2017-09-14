'use strict';

module.exports = function() {
  var hiddenNum;

  return function secretNumber() {
    if (hiddenNum === undefined) {
      hiddenNum = Math.random() * 1000000;
    }
    return hiddenNum;
  };
};