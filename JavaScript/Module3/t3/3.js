'use strict';
const names = ['John', 'Paul', 'Jones'];

const ul = document.getElementById("target")
for (let name of names){
    ul.innerHTML += `<li>${name}</li>`
}