const input = prompt("Give 5 numbers separated with a space")
const numbers = input.split(" ")
if (numbers.length === 5) {
    for (let i = 4; i > -1; i--) {
        console.log(numbers[i])
    }
} else {
    console.log("5 numbers not given.")
}