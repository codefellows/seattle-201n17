'use strict';
// Checks to see iff code is connected.
console.log('It is ALIVE!');

// Function to return a name.  Has a default of 'John' in case an 
// argument is not called
// called with 
// getName('some_name);
// or
// getName(); 
function getName(name = 'John'){
    // var name = prompt('Please enter your name');
    return 'The user entered: ' + name;
};

// Function to add 2 numbers, uses number1 and number2
// number2 has a default 
// called with
// addTwoNumbers(2,2)
// remeber you may need to save the return to a variable
function addTwoNumbers(number1, number2 = 2){
    var sum = number1 + number2;
    return sum;
};

// Function to display data
// called with
// displayData(some number or variable of a total);
function displayData(total){
    console.log('The total is: ' + total);
};
// var total = addTwoNumbers();
// console.log(addTwoNumbers(3,5));
// var total = addTwoNumbers(2,2);
// displayData(total);

var single = addTwoNumbers(10, 3);
console.log(single);

var userName = getName();
console.log(userName);

// This line is the same as the 2 below it!
displayData(addTwoNumbers(1,2));

var newData = addTwoNumbers(1,2);
displayData(newData);