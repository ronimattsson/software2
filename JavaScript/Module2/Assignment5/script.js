let numbers = [];
let number = parseInt(prompt("Give number"));
while (!numbers.includes(number)){
    numbers.push(number);
    number = prompt("Give number");
}
document.querySelector("#announce").innerText = `${number} has already been given.`
numbers.sort((a,b) => {return a-b});
for (let i = 0; i < numbers.length; i++){
    document.querySelector("#target").innerHTML += `<li>${numbers[i]}</li>`;
}