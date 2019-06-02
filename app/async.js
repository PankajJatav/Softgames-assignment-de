if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(['jquery'], function($) {
    return {
        async: function(value) {
            // Linting issue for this
            // var promise = new Promise(function(resolve, reject) {
            //  resolve(value);
            // });
            // return promise;

            var promise = $.Deferred();
            setTimeout(function() {
                promise.resolve(value);
            }, 100);
            return promise.promise();
        },

        manipulateRemoteData: function(url) {
            //        var promise = new Promise(function(resolve, reject) {
            //          $.ajax({
            //              url,
            //              success: function (response) {
            //                  var data = response.people.map(function(value) { return value.name } ).sort();
            //                  resolve(data);
            //              }
            //          })
            //        });
            //        return promise;

            var promise = $.Deferred();
            $.ajax(url).then(function(response) {
                var data = response.people.map(function(value) {
                    return value.name;
                }).sort();
                promise.resolve(data);
            });
            return promise.promise();

        }
    };
});