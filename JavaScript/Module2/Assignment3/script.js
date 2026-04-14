const amount = 6
let dogs = []
for (let i = 0; i < amount; i++) {
    dogs.push(prompt(`Name of dog${i+1}`))
}

dogs.sort()
dogs.reverse()
for (let i = 0; i < amount; i++){
    document.querySelector("#target").innerHTML += `<li>${dogs[i]}</li>`
}
