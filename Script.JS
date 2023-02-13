`use strict`

let btn = document.getElementById(`hider`);
let div = document.getElementById(`text`);

////////////////////////A shitty way////////////////////////

btn.addEventListener(`click`, () => {
    div.style.display = `none`;
    setTimeout(() => btn.style.display = `none`, 1000)
})

/////////////////////An even shitier way////////////////////

// btn.addEventListener(`click`, () => {
//     div.style.transition = `.5s`
//     div.style.pointerEvents = `none`;
//     div.style.opacity = `0`;
//     div.style.visibility = `hidden`;
//     setTimeout(() => {
//         btn.style.transition = `.5s`
//         btn.style.pointerEvents = `none`;
//         btn.style.opacity = `0`;
//         btn.style.visibility = `hidden`;
//     }, 1000)
// })