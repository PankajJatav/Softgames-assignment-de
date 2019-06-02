if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(function() {
    return {
        listFiles: function(data, dirName) {
            function getFiles(data, result, shouldAdd) {
                for (var i = 0; i < data.files.length; i++) {
                    if (typeof data.files[i] === 'string') {
                        if (shouldAdd === true) {
                            result.push(data.files[i]);
                        }
                    } else {
                        if (data.files[i].dir === shouldAdd) {
                            getFiles(data.files[i], result, true);
                        } else {
                            getFiles(data.files[i], result, shouldAdd);
                        }
                    }
                }
                return result;
            }
            return dirName ? getFiles(data, [], dirName) : getFiles(data, [], true);
        },

        permute: function(arr) {
            var result = [],
                usedChars = [];

            function computePer(data) {
                var i, ch;
                for (i = 0; i < data.length; i++) {
                    ch = data.splice(i, 1)[0];
                    usedChars.push(ch);
                    if (data.length === 0) {
                        result.push(usedChars.slice());
                    }
                    computePer(data);
                    data.splice(i, 0, ch);
                    usedChars.pop();
                }
                return result;
            }
            return computePer(arr);
        }
    };
});