let olastModif = document.lastModified;
let nLastModif = Date.parse(document.lastModified);
let year = new Date(nLastModif)
// let dayN = nLastModif.getYear()
let dayN = year.getFullYear()
console.log(dayN)
// console.log('hola')
// 

document.querySelector("#currentDate").innerHTML = ' ' + olastModif;
document.querySelector("#currentYear").innerHTML = dayN;
