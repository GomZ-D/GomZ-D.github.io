let olastModif = document.lastModified;
let nLastModif = Date.parse(document.lastModified);

let dayN

console.log(olastModif)

document.querySelector("#currentDate").innerHTML = ' ' + olastModif;