const text = prompt("Enter 3 numbers separated by a space").split(" ");
const value1 = parseInt(text[0]);
const value2 = parseInt(text[1]);
const value3 = parseInt(text[2]);

const sum = value1 + value2 + value3;
const product = value1 * value2 * value3;
const average = (value1 + value2 + value3) / 3;

document.querySelector('#input').innerText = "input: " + value1 + ", " + value2 + ", " + value3;
document.querySelector('#sum').innerText = "Sum is: " + sum;
document.querySelector('#product').innerText = "Product is: " + product;
document.querySelector('#average').innerText = "Average is: " + average;

