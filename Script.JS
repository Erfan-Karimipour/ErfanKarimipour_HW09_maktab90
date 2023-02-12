`use strict`

const agetable = document.getElementById(`age-table`);
const labelelements = agetable.getElementsByTagName(`label`);
const firsttd = agetable.querySelector(`td`);
const searchform = document.querySelector(`form[name="search"]`);
const firstinput = searchform.querySelector(`input`);
const allinputs = searchform.getElementsByTagName(`input`);
const lastinput = allinputs.length - 1;

console.log(allinputs[lastinput]);
allinputs[lastinput].style.backgroundColor = `red`;
