`use strict`

const body = document.body;
const list = document.querySelector(`.list`);

function GetNewListItem(x) {
    let NewItem = document.createElement(`li`);
    NewItem.innerHTML = x;
    body.append(NewItem)
}

for (; ;) {
    let x = prompt(`What do you want to add?`)
    if (x != false) {
        GetNewListItem(x)
    }
    else { break }
}