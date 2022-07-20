const URL ="https://api.openweathermap.org/data/2.5/forecast?id=3530103&units=metric&appid=08eba1b003806ec1813f00d4b61f388c";

fetch(URL) 
    .then((response)=> response.json())
    .then((jsObject)=> {
    // console.log(jsObject)

    const current= jsObject.list[0].weather[0].main;
    const high = jsObject.list[0].main.temp;
    const humidity = jsObject.list[0].main.humidity;
   
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    document.querySelector('.temperature').textContent = high;
    document.querySelector('.humidity').textContent = humidity;
 
    document.querySelector('.weathercurrent').textContent = current;

    const imgIco = document.getElementsByClassName('iconTable');
    const textIco = document.getElementsByClassName('iconText');
    const weektext = document.getElementsByClassName('weektext');
    
    // const hour = jsObject.list[0].dt_txt
    
    let count = 0;
    jsObject.list.filter((item,index) =>{ 
        
        if (item.dt_txt.includes('12:00:00')){
            let dia = new Date(item.dt_txt)
            let day = weekday[dia.getDay()]
            // console.log(day)
            const imagesrc = "https://openweathermap.org/img/wn/" + item.weather[0].icon + "@2x.png";
            imgIco[count].setAttribute('src', imagesrc);
            textIco[count].innerHTML = item.weather[0].main;
            weektext[count].innerHTML = day
            count += 1;
           
        }
    });
});