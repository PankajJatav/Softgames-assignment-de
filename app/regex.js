if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        return (new RegExp('[\\d]')).test(str);
    },

    containsRepeatingLetter : function(str) {
        return (new RegExp('([A-Za-z])\\1')).test(str);
    },

    endsWithVowel : function(str) {
        return (new RegExp('[aeiouAEIOU]$')).test(str);
    },

    captureThreeNumbers : function(str) {
        var result = (new RegExp('[\\d]{3}')).exec(str);
        return result ? result[0] : false;
    },

    matchesPattern : function(str) {
        return (new RegExp('^\\d{3}-\\d{3}-\\d{4}$')).test(str);
    },
    isUSD : function(str) {
        return (new RegExp('^\\$(\\d{1,3}(\\,\\d{3})*|(\\d+))(\\.\\d{2})?$')).test(str);
    }
  };
});
