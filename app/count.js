if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
        var timer;
        function log() {
            console.log(start++);
            if(start <= end) {
                timer = setTimeout( log, 100 );
            }
        }
        log();

        return {
            cancel: function() {
                clearTimeout(timer);
            }
        };
    }
  };
});