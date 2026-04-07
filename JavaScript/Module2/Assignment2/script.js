const input_amount = parseInt(prompt("Give the amount of participants"))
let participants = []
for (let i = 0; i < input_amount; i++) {
    participants.push(prompt(`Name of participant${i+1}`))
}

participants.sort()
for (let i = 0; i < input_amount; i++){
    document.querySelector("#target").innerHTML += `<li>${participants[i]}</li>`
}
