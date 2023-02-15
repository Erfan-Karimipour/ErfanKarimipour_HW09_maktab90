`use strict`

let allLinks = document.querySelectorAll(`a`);

function styler() {

    allLinks.forEach((item) => {
        let linktext = item.innerHTML;
        if (linktext.includes(`://`) && !linktext.includes(`http://internal.com`)) {
            item.style.color = `orange`;
        }
    })
}

styler();