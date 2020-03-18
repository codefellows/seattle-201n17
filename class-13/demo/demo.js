'use strict';

var words = ['words', 'more', 'words', 'and', 'then', 'more'];

// Write a loop that will iterate through the array and console log each word
function wordLoop(){
    for(var i = 0; i < words.length; i++){
        console.log(words[i]);
    }
} 

// Write a loop that iterates through the array backwards, and writes to a new array
function backwordsLoop(){
    var backwords = [];
    for(var j = words.length-1; j >= 0; j--){
        backwords.push(words[j]);
    }
}

// using template literals write a sentence with the array on the whiteboard!
function literalLoop(){
    var literalWord = `${word[0]} ${word[1]} ${word[2]}`;
    console.log(literalWord);
}

(function rendered(choice) {
    wordLoop();
    backwordsLoop();
    literalLoop();
})(); 

var newLoop = function(){
    
}