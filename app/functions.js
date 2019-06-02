if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(null, arr);
    },

    speak : function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction : function(str) {
        return function(str2) {
            return str + ', ' + str2;
        };
    },

    makeClosures : function(arr, fn) {
        var result = [];
        var closureFunction = function (val) {
            return function() {
                return fn(val);
            };
        };
        for ( var i = 0; i < arr.length; i++ ) {
            result.push(closureFunction(arr[i]));
        }
        return result;
    },

    partial : function(fn, str1, str2) {
        return fn.bind(null, str1, str2);
    },

    useArguments : function() {
        var sum = 0;
        for( var i = 0;  i < arguments.length; i++ ) {
            sum += arguments[i];
        }
        return sum;
    },

    callIt : function(fn) {
        return fn.apply(null, Array.prototype.slice.call(arguments, 1));
    },

    partialUsingArguments : function(fn) {
        var args = Array.prototype.slice.call(arguments, 1);
        return function() {
            return fn.apply(null, args.concat(Array.prototype.slice.call(arguments)) );
        };
    },

    curryIt : function(fn) {
       var args = Array.prototype.slice.call(arguments, 1);
       if(fn.length === args.length) {
           return fn.apply(null, args);
       } else {
            function carryingFunction() {
                return function(currArg) {
                    args.push(currArg);
                    if( fn.length === args.length) {
                        return fn.apply(null, args);
                    } else {
                        return carryingFunction();
                    }
                };
            }
            return carryingFunction();
       }
    }
  };
});
