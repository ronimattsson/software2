'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const select = document.getElementById("target")

let option;
for (let student of students) {
  option = document.createElement("option");
  option.setAttribute("value", `${student.id}`);
  option.appendChild(document.createTextNode(`${student.name}`));
  select.appendChild(option)
}