`use strict`

let body = document.body;
let starter = document.querySelector(`.starter`);
let massages = document.querySelectorAll(`.massage`);
let deletebtn = document.createElement(`button`);

deletebtn.classList.add(`deletebtn`);
deletebtn.innerHTML = `[X]`;

starter.addEventListener(`click`, () => {
    for (let i = 0; i < massages.length; i++) {
        excludeletebtn = deletebtn.cloneNode(true);
        massages[i].prepend(excludeletebtn);
    }
    starter.remove();
})

body.addEventListener(`click`, (e) => {
    if (e.target.classList.contains(`deletebtn`)) {
        e.target.parentElement.remove();
    }
})