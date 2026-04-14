const ul = document.getElementById("target")

let li = document.createElement('li')
let text = document.createTextNode("First item")
li.appendChild(text)
ul.appendChild(li)

li = document.createElement('li')
text = document.createTextNode("Second item")
li.setAttribute("class", "my-item")
li.appendChild(text)
ul.appendChild(li)

li = document.createElement('li')
text = document.createTextNode("Third item")
li.appendChild(text)
ul.appendChild(li)