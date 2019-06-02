if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        for( var i = 0; i < arr.length; i++ ) {
            if(arr[i] === item) {
                return i;
            }
        }

        return -1;
    },

    sum : function(arr) {
        var result = 0;
        for( var i = 0; i < arr.length; i++ ) {
            result += arr[i];
        }
        return result;
    },

    remove : function(arr, item) {
        var result = [];
        for( var i = 0; i < arr.length; i++ ) {
            if( arr[i] !== item ) {
                result.push(arr[i]);
            }
        }
        return result;
    },

    removeWithoutCopy : function(arr, item) {
        var i;
        for( i = 0; i < arr.length; i++ ) {
            if(arr[i] === item ) {
                arr.splice(i , 1);
                i--;
            }
        }
        return arr;
    },

    append : function(arr, item) {
        // arr.push(item);
        arr[arr.length] = item;
        return arr;
    },

    truncate : function(arr) {
       // arr.pop();
       arr.length = arr.length - 1;
       return arr;
    },

    prepend : function(arr, item) {
        // arr.unshift(item);
        for( var i = arr.length; i >= 0; i-- ) {
            arr[i] = arr[i-1];
        }
        arr[0] = item;
        return arr;
    },

    curtail : function(arr) {
        // arr.shift(item);
        for( var i = 0; i < arr.length; i++ ) {
            arr[i] = arr[i+1];
        }
        arr.length = arr.length - 1;
        return arr;
    },

    concat : function(arr1, arr2) {
        // arr1.concat(arr2);
        var result = arr1.slice();
        for( var i = 0; i < arr2.length; i++ ) {
            result.push(arr2[i]);
        }
        return result;
    },

    insert : function(arr, item, index ) {
        // arr.splice(index, 0, item);
        for( var i = arr.length; i > index; i-- ) {
            arr[i] = arr[i-1];
        }
        arr[index] = item;
        return arr;
    },

    count : function(arr, item) {
        var result = 0;
        for( var i = 0; i < arr.length; i++ ) {
            if( arr[i] === item ) {
                result++;
            }
        }
        return result;
    },

    duplicates : function(arr) {
        var itemCounterObj = {};
        var duplicates = [];
        for( var i = 0; i < arr.length; i++ ) {
            itemCounterObj[arr[i]] = itemCounterObj[arr[i]] ? ++itemCounterObj[arr[i]] : 1;
        }

        for( var key  in itemCounterObj) {
            if(itemCounterObj[key] > 1) {
                duplicates.push(key);
            }
        }
        return duplicates;
    },

    square : function(arr) {
        var result = [];
        for( var i = 0; i < arr.length; i++ ) {
            result.push(arr[i] * arr[i]);
        }
        return result;
    },

    findAllOccurrences : function(arr, target) {
        var result = [];
        for( var i = 0; i < arr.length; i++ ) {
            if( arr[i] === target ) {
                result.push(i);
            }
        }
        return result;
    }
  };
});
