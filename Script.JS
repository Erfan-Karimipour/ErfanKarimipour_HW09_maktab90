`use strict`

let body = document.body;
let btn = document.querySelector(`.btn`);

btn.addEventListener(`click`, () => body.innerHTML = ``);