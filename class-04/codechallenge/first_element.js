// Write a function that will return the first index value of an array;

'use strict';
var array = ['Darth Vader', 'Darth Sideous', 'Darth Maul', 'Darth Reven']

function firstIndex (arr){
    var value = arr[0];
    return value;
}

var value = firstIndex(array);
console.log('The last value in the array is ' + value + '!');
