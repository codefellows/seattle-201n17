'use strict';

var imageOneEl = document.getElementById('picture1');
var imageTwoEl = document.getElementById('picture2');
var sectionEl = document.getElementById('image-container');

// imageOneEl.src = 'img/starwars1.jpg';
// imageOneEl.alt = 'starwars1';
// imageOneEl.title = "starwars1";

// imageTwoEl.src = 'img/starwars2.jpg';
// imageTwoEl.alt = 'starwars2';
// imageTwoEl.title = 'starwars3';


var allMovies = [];

function StarWarsMovies(src, alt, title){
    this.src = src;
    this.alt = alt;
    this.title = title;
    this.clicked = 0;
    this.viewed = 0;

    // chartNames.push(this.title);
    allMovies.push(this);
}

function random(max) {
    return Math.floor(Math.random() * max);
};

function imageGenerator(){
    var pic1 = random(allMovies.length);
    var pic2 = random(allMovies.length);
    while(pic1 === pic2){
        pic2 = random(allMovies.length);
    }

    imageOneEl.src = allMovies[pic1].src;
    imageOneEl.alt = allMovies[pic1].alt;
    imageOneEl.title = allMovies[pic1].title;
    allMovies[pic1].viewed++;

    imageTwoEl.src = allMovies[pic2].src;
    imageTwoEl.alt = allMovies[pic2].alt;
    imageTwoEl.title = allMovies[pic2].title; 
    allMovies[pic2].viewed++;
}

function handelClick(e) {
    var clickedMovie = e.target.title;
    for(var i =0; i < allMovies.length; i++){
        if(clickedMovie === allMovies[i].title){
            allMovies[i].clicked++;
        }
    }
    totalClicks--;
    imageGenerator();
}

function populateData(){
    new StarWarsMovies('img/starwars1.jpg', 'starwars1', 'starwars1');
    new StarWarsMovies('img/starwars2.jpg', 'starwars2', 'starwars2');
    new StarWarsMovies('img/starwars3.jpg', 'starwars3', 'starwars3');
    new StarWarsMovies('img/starwars4.jpg', 'starwars4', 'starwars4');
    new StarWarsMovies('img/starwars5.jpg', 'starwars5', 'starwars5');
    new StarWarsMovies('img/starwars6.jpg', 'starwars6', 'starwars6');
    new StarWarsMovies('img/starwars7.jpg', 'starwars7', 'starwars7');
    new StarWarsMovies('img/starwars8.jpg', 'starwars8', 'starwars8');
    new StarWarsMovies('img/starwars9.jpg', 'starwars9', 'starwars9');
}

    sectionEl.addEventListener('click', handelClick);

    populateData();
    imageGenerator();
