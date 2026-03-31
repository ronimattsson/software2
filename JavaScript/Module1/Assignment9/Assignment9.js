function is_prime(number){
    for(let i = 2; i <= Math.sqrt(number); i++){
        if(number % i === 0) return false;
    }
    return true;
}

const number = parseInt(prompt("Give a number to check for prime"));
let text = ""
if (is_prime(parseInt(number))){
    text = number + " is a prime.";
} else {
    text = number + " is not a prime.";
}

document.querySelector("#target").innerText = text;
