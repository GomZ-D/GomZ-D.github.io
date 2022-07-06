const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then((response) => {
        // console.log(response)
        return response.json();
    })
    .then((jsonObject)=>{
        console.table(jsonObject);
        const prophets = jsonObject['prophets'];

        for (let i = 0; i < prophets.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let date = document.createElement('p');
            let place = document.createElement('p');
            let imagen = document.createElement('img')
            h2.textContent = prophets[i].name + ' '+ prophets[i].lastname;
            card.appendChild(h2);
            date.textContent = 'Birth Date: ' +prophets[i].birthdate;
            place.textContent = 'Birth Place: ' +prophets[i].birthplace;
            imagen.setAttribute('src', prophets[i].imageurl);
            imagen.setAttribute('alt', prophets[i].name + ' '+ prophets[i].lastname + '-'+[i])
            document.querySelector('div.cards').appendChild(card);
            card.appendChild(date);
            card.appendChild(place);
            card.appendChild(imagen);
            
        }
    });


 


