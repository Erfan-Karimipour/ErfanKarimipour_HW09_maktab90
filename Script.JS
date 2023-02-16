`use strict`

let data = {
    "Fish": {
        "trout": {},
        "salmon": {}
    },
    "Tree": {
        "Huge": {
            "sequoia": {},
            "oak": {}
        },
        "Flowering": {
            "apple tree": {},
            "magnolia": {}
        }
    }
};

function insidejob(data) {
    let li = "";
    let ul = "";
    for (let key in data) {
        li += `<li> ${key} ${insidejob(data[key])} </li>`;
    }
    if (li) {
        ul = `<ul>${li}</ul>`
    }
    return ul;
}

function creator(container, data) {
    container.innerHTML = insidejob(data);
}

creator(document.querySelector(`.container`), data);