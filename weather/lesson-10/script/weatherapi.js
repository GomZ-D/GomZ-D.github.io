const apiURL ="http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=08eba1b003806ec1813f00d4b61f388c";

fetch(apiURL) 
    .then((response)=> response.json())
    .then((jsObject)=> {
    console.log(jsObject)

    const current= jsObject.list[0].weather[0].main;
    const high = jsObject.list[0].main.temp;
    const humidity = jsObject.list[0].main.humidity;
    const wind = jsObject.list[0].wind.speed;

    document.querySelector('.temper').textContent = high;
    document.querySelector('.humidity').textContent = humidity;
    document.querySelector('.wspeed').textContent = wind;
    document.querySelector('.weathercurrent').textContent = current;

    const imgIco = document.getElementsByClassName('iconTable');
    const textIco = document.getElementsByClassName('iconText');

    const hour = jsObject.list[0].dt_txt
    // let text = hour.split(' ');
    // console.log(text);
     
    let count = 0;
    jsObject.list.filter((item,index) =>{ 
        // for(let i=0; i <= 5; i++){
        if (item.dt_txt.includes('18:00:00')){
            // console.log('works!!');
            const imagesrc = "https://openweathermap.org/img/wn/" + item.weather[0].icon + "@2x.png";
            // document.getElementByclassName('.iconTable').setAttribute('src', imagesrc);
            imgIco[count].setAttribute('src', imagesrc);
            textIco[count].innerHTML = item.weather[0].main;
            count += 1;
            // console.log(index)
        }
        
        
    });
    
    // ----------CALCULATE WIND-CHILL-------
    let temp =  parseFloat(document.querySelector('.temper').innerHTML);
    let speed =  parseFloat(document.querySelector('.wspeed').innerHTML);
 

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



});



    
 