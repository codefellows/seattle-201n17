'use strict';

// console.log("hello world");

var arr = ['Rocky', 'Rocky II', 'Rocky III', 'Rocky IV', 'Rocky V', 'Rocky Balboa', 'Creed', 'Creed 2'];

var myChildren = [{name:'Ashton', age:20}, {name: 'Taylor', age: 24}, {name: 'Coden', age: 20}, {name: 'Annalise', age: 17}, {name: 'Chloe', age: 9}];

// Need to have a place to 'anchor' data to.  This is the parent element.
var movieElement = document.getElementById('movies');
var childrenElement = document.getElementById('children');

// create the element
// var listElement = document.createElement('li');
// give it conent
// listElement.textContent = 'This is my list item';
// append the elemnt to the dom
// movieElement.appendChild(listElement);

for(var i = 0; i < arr.length; i++){
    // create the element
    var listElement = document.createElement('li');
    // give it conent
    listElement.textContent = arr[i];
    // append the elemnt to the dom
    movieElement.appendChild(listElement);
}

for(var j = 0; j < myChildren.length; j++){
    var liEl  = document.createElement('li');
    liEl.textContent = myChildren[j].name;
    childrenElement.appendChild(liEl);
}

