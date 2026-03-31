function DiceSum(amount){
    let sum = 0
    for (let i = 0; i < amount; i++) {
        sum += Math.floor(Math.random()*6)+1; //0-3
    }
    return sum;
}

const amount = parseInt(prompt("Give a number of dice."));
const guessed = parseInt(prompt("Give the sum you'd like to get."));

let hits = 0;
const sims = 10000
for (let i = 0; i <= sims; i++) {
    if (DiceSum(amount) === guessed) {
        hits += 1;
    }
}

const chance = (hits/sims*100).toFixed(2)
const text = "Probability to get sum " + guessed + " with " + amount + " dice is " + chance + "%.";

document.querySelector("#target").innerText = text;
