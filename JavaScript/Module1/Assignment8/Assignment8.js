function is_leap(year){
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}
const year1 = parseInt(prompt("Give starting year"))
const year2= parseInt(prompt("Give ending year"))

for (let i = year1; i<=year2; i++) {
    if (is_leap(i)){
        document.querySelector("#target").innerHTML += "<li>" + String(i) + "</li>"
    }
}