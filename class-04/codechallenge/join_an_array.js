// Given a array of letters, write a function that will join each letter to make a word. Return the string

'use strict';

function joinArray(arr) {
    var joinString = arr.join("");
    return joinString;
};

var arr = ['C', 'o', 'd', 'i', 'n', 'g', ' ', 'i', 's', ' ', 'f', 'u', 'n', '!']
console.log(joinArray(arr));