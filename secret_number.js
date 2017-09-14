'use strict';

module.exports = function() {
  var hiddenNum = Math.random() * 1000001;

  return function () {
    return hiddenNum;
  };
};