`use strict`

let body = document.querySelector(`body`);

// body.addEventListener(`mouseover`, (e) => {
//     if (e.target.classList.contains(`title`)) {
//         e.target.parentElement.querySelector(`.tooltip`).classList.remove(`hidden`);
//     }
// })
// body.addEventListener(`mouse`)


function Visible(t) {
    t.parentElement.querySelector(`.tooltip`).classList.remove(`hidden`);
    t.classList.remove(`boxshadow`);
}
function Hide(t) {
    t.parentElement.querySelector(`.tooltip`).classList.add(`hidden`);
    t.classList.add(`boxshadow`);
}