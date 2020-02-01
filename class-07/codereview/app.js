'use strict';

var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am'];
// var businessLo0cations = ['Seattle'];

var seattle = {
    location: 'Seattle',
    minCustomers: 23,
    maxCustomers: 65,
    avgCookies: 6.3,
    totalCookies: 0,
    dailyCookieSales: [],
    calculateCustomer: function(){
        return (Math.floor(Math.random() * (this.maxCustomers - this.minCustomers +1)) + this.minCustomers);
    },
    cookiesEachHour: function(){
        for(var i = 0; i < hoursOfOperation.length; i++){
            var salesPerHour = Math.round(this.avgCookies * this.calculateCustomer());
            this.dailyCookieSales.push(salesPerHour);
            this.totalCookies += salesPerHour;
        }
    },
    render: function(){
        var parentEl = document.getElementById('sales');
        var liEl = document.createElement('li');
        liEl.textContent = this.location;
        parentEl.appendChild(liEl);
        for(var i = 0; i < hoursOfOperation.length; i++){
            liEl = document.createElement('li');
            liEl.textContent = hoursOfOperation[i] + ': ' + this.dailyCookieSales[i] + ' cookies';
            parentEl.appendChild(liEl);
        }
        liEl = document.createElement('li');
        liEl.textContent = 'Total: ' + this.totalCookies;
        parentEl.appendChild(liEl);
    }
}
// TODO sdfhjksdhf

var tokyo = {
    location: 'Tokyo',
    minCustomers: 3,
    maxCustomers: 24,
    avgCookies: 1.2,
    totalCookies: 0,
    dailyCookieSales: [],
    calculateCustomer: function(){
        return (Math.floor(Math.random() * (this.maxCustomers - this.minCustomers +1)) + this.minCustomers);
    },
    cookiesEachHour: function(){
        for(var i = 0; i < hoursOfOperation.length; i++){
            var salesPerHour = Math.round(this.avgCookies * this.calculateCustomer());
            this.dailyCookieSales.push(salesPerHour);
            this.totalCookies += salesPerHour;
        }
    },
    render: function(){
        var parentEl = document.getElementById('sales');
        var liEl = document.createElement('li');
        liEl.textContent = this.location;
        parentEl.appendChild(liEl);
        for(var i = 0; i < hoursOfOperation.length; i++){
            liEl = document.createElement('li');
            liEl.textContent = hoursOfOperation[i] + ': ' + this.dailyCookieSales[i] + ' cookies';
            parentEl.appendChild(liEl);
        }
        liEl = document.createElement('li');
        liEl.textContent = 'Total: ' + this.totalCookies;
        parentEl.appendChild(liEl);
    }
}

console.log(seattle.calculateCustomer());
seattle.cookiesEachHour();
seattle.render();
tokyo.cookiesEachHour();
tokyo.render();




    // redner to the DOM
