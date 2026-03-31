function is_leap(year){
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}

const year = prompt("Give a year");
if (is_leap(parseInt(year))) {
    document.querySelector('#target').innerText = "Year " + year + " is a leap year.";
} else {
    document.querySelector('#target').innerText = "Year " + year + " is not a leap year.";
}
