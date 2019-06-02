if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
        return fn.call(obj);
    },

    alterObjects : function(constructor, greeting) {
        return constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
        var result = [];
        Object.getOwnPropertyNames(obj).forEach( function(key){
            result.push( key + ': ' + obj[key] );
        });
        return result;
    }
  };
});
