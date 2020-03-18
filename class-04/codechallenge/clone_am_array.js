// Given an array make an exact duplicate of an array.
// return the new array and console.log it.

'use strict';

function duplicateAnArray(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        newArr[i] = arr[i];
    }
    return newArr;
}

var array = ['This', 'is', 'an', 'array'];
var newArr = duplicateAnArray(array);
console.log(newArr);