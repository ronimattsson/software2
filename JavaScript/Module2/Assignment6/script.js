function diceroll() {
    return Math.floor(Math.random()*6) + 1
}

let number = 0;
while (number != 6) {
    number = diceroll()
    document.querySelector("#target").innerHTML += `<li>${number}</li>`
}