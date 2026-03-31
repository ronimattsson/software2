let text = "";

if (confirm("Should I calculate the square root?")) {
    const number = prompt("Give a number");
    if (number < 0) {
        text = "The square root of a negative number is not defined";
    } else {
        const sqrt = Math.sqrt(parseInt(number));
        text = "The square root of " + number + " is " + sqrt;
    }
} else {
    text = "The square root is not calculated.";
}

document.querySelector("#target").innerText = text;