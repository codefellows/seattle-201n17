'use strict';

console.log('Alive over here too');

var likesStarWars = prompt('Do you like Star Wars');

if (likesStarWars.toLowerCase() === 'yes') {
  alert('Awesome, I LOVE Star Wars too!');
} else if (likesStarWars === 'no') {
  alert('Hmm, that does not compute with me');
} else {
  alert('Something went wrong!');
}
