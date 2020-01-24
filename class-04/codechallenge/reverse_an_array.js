// Given an array, write a function to reverse an array
// Return the new array.  You cannot use the .reverse() method.

'use strict';

function reverseAnArray(arr) {
    var newArr = [];
    for(var i = arr.length-1; i >= 0; i--){
        newArr.push(arr[i]);
    }
    return newArr;
}

var arr = ['Reverse', 'this', 'ya', 'filty', 'animal'];

var newArr = reverseAnArray(arr);
console.log('The original array is: ' + arr);
console.log('The new array is: ' + newArr);