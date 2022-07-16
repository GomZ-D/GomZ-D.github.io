const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
 
let myDate = new Date()
// let year = myDate.getFullYear()
 
let diaName = weekday[myDate.getDay()];
let dia2 = myDate.getDate();
let monthName = month[myDate.getMonth()];
let year = myDate.getFullYear();
let fullDate = ' '+diaName +', '+dia2+' '+monthName+ ' '+year;
console.log(fullDate)
document.querySelector("#currentDate").textContent = fullDate; 
document.querySelector("#currentYear").innerHTML = year;
 