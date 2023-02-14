`use strict`

function Visible(t) {
    t.parentElement.querySelector(`.tooltip`).classList.remove(`hidden`);
    t.classList.remove(`boxshadow`);
}
function Hide(t) {
    t.parentElement.querySelector(`.tooltip`).classList.add(`hidden`);
    t.classList.add(`boxshadow`);
}