'use strict';

var imageOneEl = document.getElementById('picture1');
var imageTwoEl = document.getElementById('picture2');
var sectionEl = document.getElementById('image-container');
var sectionEl1 = document.getElementById('list-container');



var totalClicks = 25;
var allMovies = [];
var chartNames = [];
var numberArray = [];

function StarWarsMovies(src, alt, viewed=0, clicked=0){
    this.src = src;
    this.alt = alt;
    this.title = alt;
    this.clicked = clicked
    this.viewed = viewed;

    chartNames.push(this.title);
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
    totalClicks--;
    for(var i =0; i < allMovies.length; i++){
        if(clickedMovie === allMovies[i].title){
            allMovies[i].clicked++;
        }
    }
    if(totalClicks > 0) {
        imageGenerator();
    } else {
        sectionEl.removeEventListener('click', handelClick);
        sectionEl.style.display = 'none';
        // save to local storage
        toLocalStorage();
        showList();
        addChartData();
        renderChart();
    }

}

function toLocalStorage(){
    var arrayString = JSON.stringify(allMovies);
    localStorage.setItem('swMovies', arrayString);
}

function showList() {
    for(var i = 0; i < allMovies.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = allMovies[i].title + ' has ' + allMovies[i].clicked + ' votes in ' + allMovies[i].viewed + ' views';
      sectionEl1.appendChild(liEl);
    }
  }

function addChartData(){
    for(var i = 0; i < allMovies.length; i++){
        numberArray.push(allMovies[i].clicked);
    }
}

function renderChart(){
    var ctx = document.getElementById('my_data');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: chartNames,
            datasets: [{
                label: '# of Votes',
                data: numberArray,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

function populateData(){
    if(localStorage.getItem('swMovies')){
        console.log('There is local Storage');
        var allStorageMovies = JSON.parse(localStorage.getItem('swMovies'));
        console.log(allStorageMovies);
        for(var i = 0; i < allStorageMovies.length; i++){
            new StarWarsMovies(
                allStorageMovies[i].src, 
                allStorageMovies[i].alt,
                allStorageMovies[i].viewed,
                allStorageMovies[i].clicked)
        }
    } else {
        console.log('There is no localStorage');
        new StarWarsMovies('img/starwars1.jpg', 'starwars1');
        new StarWarsMovies('img/starwars2.jpg', 'starwars2');
        new StarWarsMovies('img/starwars3.jpg', 'starwars3');
        new StarWarsMovies('img/starwars4.jpg', 'starwars4');
        new StarWarsMovies('img/starwars5.jpg', 'starwars5');
        new StarWarsMovies('img/starwars6.jpg', 'starwars6');
        new StarWarsMovies('img/starwars7.jpg', 'starwars7');
        new StarWarsMovies('img/starwars8.jpg', 'starwars8');
        new StarWarsMovies('img/starwars9.jpg', 'starwars9');
        new StarWarsMovies('img/starwarsrogueone.jpg', 'starwarsrogueone');
        new StarWarsMovies('img/starwarssolo.jpg', 'starwarssolo');
    }
}

    sectionEl.addEventListener('click', handelClick);

    populateData();
    imageGenerator();
