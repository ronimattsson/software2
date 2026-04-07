function get_evens(numbers) {
    let even = [];
    for (let i of numbers){
        if (i%2 == 0){
            even.push(i);
        }
    }
    return even;
}

const numbers = [2,4,5,22,35,100,239,1,55,1028];
const even_numbers = get_evens(numbers);

document.getElementById("start").innerText = numbers;
document.getElementById("end").innerText = even_numbers;
