// Write a function that will return the last index value of an array;

'use strict';
var array = ['Darth Vader', 'Darth Sideous', 'Darth Maul', 'Darth Reven']

function lastIndex (arr){
    var value = arr[arr.length-1];
    return value;
}

var value = lastIndex(array);
console.log('The last value in the array is ' + value + '!');
