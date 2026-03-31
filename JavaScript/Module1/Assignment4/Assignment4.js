const name = prompt('Type your name.');
const houses = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];
const random_number = Math.floor(Math.random()*4); //0-3
let house = houses[random_number];

if (random_number === 0) {
    house = houses[0];
} else if (random_number === 1) {
    house = houses[1];
} else if (random_number === 2) {
    house = houses[2];
} else {
    house = houses[3];
}

document.querySelector('#target').innerText = name + ", you are " + house + ".";
