'use strict';

console.log('Hello World');

var ironMan = {
    name: 'Tony Stark',
    ishuman: true,
    hasPowers: false,
    canFly: true,
    isAvenger: function(){
        console.log(this.name + ' is an avenger');
    }
}

var captainAmerica = {
    name: 'Steve Roger',
    ishuman: true,
    hasPowers: true,
    canFly: false,
    isAvenger: function(){
        console.log(this.name + ' is an avenger');
    }
}

var thor = {
    name: 'Thor Odinson',
    isHuma: false,
    hasPowers: true,
    canFly: true,
    isAvenger: function() {
        confirm.log(this.name + ' is an avenger');
    }
}

var hulk = {
    name: 'David Banner',
    isHuman: true,
    hasPowers: true,
    canFly: false,
    isAvenger: function() {
        confirm.log(this.name + ' is an avenger');
    }
}

var superHeros = [];

function SuperHero(name, isHuman, hasPowers, canFly){
    this.name = name;
    this.isHuman = isHuman;
    this.hasPowers = hasPowers;
    this.canFly = canFly;
    this.hasMovie = true;
    this.age = 10+4;
    superHeros.push(this);
};

var greenHulk = new SuperHero('Hulk', true, true, false);
new SuperHero('Tony Stark', true, false, true);
new SuperHero('Thor', false, true, true);
new SuperHero('Steve Rogers', true, true, false);

// SuperHero.prototype.isAvenger = function(){
//     // console.log(this.name + ' is an Avenger');
//     return this.name + ' is an Avenger';
// };

// (superHeros[0].name, superHeros[0].canFly)

// // superHeros[0].isAvenger();
// console.log(superHeros[0].isAvenger());
// greenHulk.color = 'green';

// console.log(superHeros[0]);

