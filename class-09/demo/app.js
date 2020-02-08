'use strict';

var userData = [];

var userForm = document.getElementById('user-form');

userForm.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    event.preventDefault();
    var name = e.target.elementName.value;
    var age = e.target.elementAge.value;
    var email = e.target.elementEmail.value;

    userData.push(name, age, email);

    console.log(name, age, email);

    e.target.elementName.value = null;
    e.target.elementAge.value = null;
    e.target.elementEmail.value = null;
}