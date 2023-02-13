`use strict`

let menuheader = document.querySelector(`.menuheader`);
let menubody = document.querySelector(`.menubody`);

menuheader.addEventListener(`click`, () => {
    menubody.classList.contains(`hidden`) ? menubody.classList.remove(`hidden`) : menubody.classList.add(`hidden`);
})