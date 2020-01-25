function addTwoNumbers(num1, num2) {
  var sum = num1 + num2;
  return sum;
}

var number1 = addTwoNumbers(2,4);
var number2 = addTwoNumbers(5,15);
console.log(addTwoNumbers(number1, number2));

console.log(addTwoNumbers(addTwoNumbers(2,4), addTwoNumbers(5,15)));

var planets = ['Tatooine', 'Dathomier', 'Hoth', 'Mustafar'];
console.log('The original array is: ' + planets);

function addToArray(arr, value){
  arr.push(value);
}

addToArray(planets, 'Naboo');
console.log(planets);

function addToArrayBeg(arr, value){
  arr.unshift(value);
}

addToArrayBeg(planets, 'Jakuu');
console.log(planets);

var newVariable = planets.shift();
console.log(newVariable);
console.log(planets);

var newerVariable = planets.pop();
console.log(newerVariable);
console.log(planets);

// splice (staring index, delete count, and items to add)

planets.splice(0,1)
console.log(planets);