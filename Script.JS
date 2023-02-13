`use strict`
//1
const agetable = document.getElementById(`age-table`);
//2
const labelelements = agetable.getElementsByTagName(`label`);
//3
const firsttd = agetable.querySelector(`td`);
//4
const searchform = document.querySelector(`form[name="search"]`);
//5
const firstinput = searchform.querySelector(`input`);
//6
const lastinput = searchform.querySelectorAll(`input`)[searchform.children.length - 1];