let temp =  parseInt(document.querySelector('.temper').innerHTML);
let speed =  parseInt(document.querySelector('.wspeed').innerHTML);

let windSpeed;
if (speed >= 5 && temp >= 50) {

    windSpeed =35.74 + 0.6215 * temp - 35.75 * speed ** 0.16 + 0.4275 * temp * speed ** 0.16;
    windSpeed = Math.round(windSpeed)
    document.querySelector('.windch').textContent=windSpeed;
}
else {
    windSpeed = 'N/A';
    document.querySelector('.windch').textContent=windSpeed;
}

