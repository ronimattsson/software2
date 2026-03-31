const dice = prompt("How many 6 faced dice you want to roll?");
let sum = 0;

for (let i = 0; i < dice; i++) {
    sum += Math.floor(Math.random()*6)+1; //0-3
}

document.querySelector("#target").innerText = "The sum of your dice is " + sum