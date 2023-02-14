`use strict`

let sectionRight = document.querySelector(`.section-right`)
let sectionLeft = document.querySelector(`.section-left`)
let overall = document.querySelector(`.allPrice`);
let firstOverallPrice = document.querySelector(`.firstOverallPrice`)
let allTaxes = document.querySelector(`.taxes`);
let offCode = document.querySelector(`.offCode`);
let offsubmit = document.querySelector(`.offsubmit`);
let off = document.querySelector(`.offcodeshow`);

let prices = [8000, 19000, 15000, 25000, 14000, 21000, 199000, 51000, 1000, 5000, 82000, 299000, 980000, 1240000];

let overallprice = 0;
let overalltax = 0;
let offallow = true;

sectionRight.addEventListener(`click`, (e) => {

    if (e.target.classList.contains(`btnAdd`)) {
        e.target.parentElement.querySelector(`span`).innerHTML++;
        e.target.parentElement.parentElement.querySelector(`.price`).innerHTML = e.target.parentElement.querySelector(`span`).innerHTML * prices[e.target.parentElement.parentElement.parentElement.id];
        let taxes = (prices[e.target.parentElement.parentElement.parentElement.id] / 100) * 5;
        overalltax += taxes;
        allTaxes.innerHTML = overalltax;
        overallprice += prices[e.target.parentElement.parentElement.parentElement.id];
        firstOverallPrice.innerHTML = overallprice;
        overall.innerHTML = overallprice + overalltax;
    }

    if (e.target.classList.contains(`btnRemove`)) {
        if (e.target.parentElement.querySelector(`span`).innerHTML > 0) {
            e.target.parentElement.querySelector(`span`).innerHTML--;
            e.target.parentElement.parentElement.querySelector(`.price`).innerHTML = e.target.parentElement.querySelector(`span`).innerHTML * prices[e.target.parentElement.parentElement.parentElement.id];
            let taxes = (prices[e.target.parentElement.parentElement.parentElement.id] / 100) * 5;
            overalltax -= taxes;
            allTaxes.innerHTML = overalltax;
            overallprice -= prices[e.target.parentElement.parentElement.parentElement.id];
            console.log(overallprice);
            firstOverallPrice.innerHTML = overallprice;
            overall.innerHTML = overallprice + overalltax;
        }
    }
})

offsubmit.addEventListener(`click`, () => {

    if (offallow == true) {
        switch (offCode.value) {
            case `Golden`: off.innerHTML = ` 30 `, overall.innerHTML -= (overallprice / 100) * 30;
                offallow = false;
                return;
            case `Silver`: off.innerHTML = ` 20 `, overall.innerHTML -= (overallprice / 100) * 20;
                offallow = false;
                return;
            case `Bronze`: off.innerHTML = ` 10 `, overall.innerHTML -= (overallprice / 100) * 10;
                offallow = false;
                return;
        }
    }
})


