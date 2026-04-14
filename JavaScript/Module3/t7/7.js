p = document.querySelector("#trigger")
img = document.querySelector("#target")

function hover_on(evt){
    img.src = "img/picB.jpg"
    p.removeEventListener("mouseenter", hover_on)
    p.addEventListener("mouseleave", hover_off)
}

function hover_off(evt){
    img.src = "img/picA.jpg"
    p.removeEventListener("mouseleave", hover_off)
    p.addEventListener("mouseenter", hover_on)
}

p.addEventListener("mouseenter", hover_on)