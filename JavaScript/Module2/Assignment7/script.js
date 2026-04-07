function diceroll(sides) {
    return Math.floor(Math.random()*sides) + 1
}


const sides = parseInt(prompt("How many sides does the dice have?"))
let number = 0;
while (number != sides) {
    number = diceroll(sides)
    document.querySelector("#target").innerHTML += `<li>${number}</li>`
}