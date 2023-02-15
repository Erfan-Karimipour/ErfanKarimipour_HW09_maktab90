'use strict'

let ul = document.querySelector(`ul`);

function createNewLi(text) {
    let newli = document.createElement(`li`);
    newli.innerHTML = text;
    ul.append(newli);
}

while (1) {
    let text = prompt(`Give me a text!`)
    if (text === `` || text === null) {
        break;
    } else {
        createNewLi(text);
    }
}