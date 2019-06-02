if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        return ( num >> (bit - 1) ) % 2;
    },

    base10: function(str) {
        return parseInt(str, 2);
    },

    convertToBinary: function(num) {
        var value = num.toString(2);
        return '00000000'.substring(0, 8 - value.length) + value;
    },

    multiply: function(a, b) {
        var precisionDotsForA = a.toString().split('.')[1] ? a.toString().split('.')[1].length : 0;
        var precisionDotsForB = b.toString().split('.')[1] ? b.toString().split('.')[1].length : 0;
        var precisionDots = precisionDotsForA > precisionDotsForB ? precisionDotsForA : precisionDotsForB;
        return parseFloat( (a*b).toFixed(precisionDots) );
    }
  };
});

