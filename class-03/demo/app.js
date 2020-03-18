'use strict';
var eatOut = ['Taco Bell', 'In-and-Out', 'dicks'];
// console.log('Full Array: ' + eatOut);

// console.log('Index 1: ' + eatOut[1]);

eatOut[3] = 'Burger King';
// console.log('Full Array: ' + eatOut);

eatOut[1] = 'Taco Cabana';
eatOut[4] = 'Something Else';
// console.log('Full Array: ' + eatOut);

// console.log(eatOut[0]);
// console.log(eatOut[1]);
// console.log(eatOut[2]);
// console.log(eatOut[3]);

// for (condition, step, stoping)
// i = i +1
for (var i = 0; i < eatOut.length; i++) {
  // console.log(eatOut[i]);
}
// console.log(i);
var x = 0;
while (x < eatOut.length) {
  // console.log('We made it to the While Loop');
  x++;
}

'2' == 2;
'2' === 2;

// if (!false){
//   console.log('This is fasle');
// }

// if (true){
//   console.log('This is true')
// }

if ('2' === 2){
  console.log('This is true')
}