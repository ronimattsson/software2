let numbers = [];
let number = prompt("Give number. 0 to quit");
while (number != 0){
    numbers.push(parseInt(number));
    number = prompt("Give number");
}
numbers.sort((a,b) => {return b-a});
for (let i = 0; i < numbers.length; i++){
    document.querySelector("#target").innerHTML += `<li>${numbers[i]}</li>`;
}
