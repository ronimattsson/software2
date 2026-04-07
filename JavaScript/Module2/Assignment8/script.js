function concat(stringlist) {
    let combined = "";
    for (let string of stringlist) {
        combined += string;
    }
    return combined;
}

const list = ["Johnny", "Deedee", "Joey", "Marky"];
const combined = concat(list);
document.querySelector("#target").innerText = combined;