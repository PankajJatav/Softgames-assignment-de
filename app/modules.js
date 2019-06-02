if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    createModule : function(str1, str2) {
        var module = (function(){
            'use strict';
            return {
                greeting: str1,
                name: str2,
                sayIt: function() {
                    return this.greeting + ', ' + this.name;
                }
            };
        }());
        return module;
    }
  };
});

