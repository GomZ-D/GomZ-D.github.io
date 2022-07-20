const  URL = 'data/data.json';

fetch(URL)
    .then((response) => {
        console.log(response)
        return response.json();
    })
    .then((jsonObject)=>{
        console.table(jsonObject);
        const cards = jsonObject['rentals'];

        for (let i = 0; i < cards.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let nameRental = document.createElement('p');
            let priceHalf = document.createElement('p');
            let priceFull = document.createElement('p');
            let imagen = document.createElement('img')
            h2.textContent = cards[i].name;
            card.appendChild(h2);
            nameRental.textContent = 'Max. Person: ' +cards[i].maxperson;
            priceHalf.textContent = 'Reserv. Half Day: ' +cards[i].reservhalfday;
            priceFull.textContent = 'Reserv. Half Day: ' +cards[i].reservfulldat;
            imagen.setAttribute('src', cards[i].imgaeurl);
            imagen.setAttribute('alt', cards[i].name)
            document.querySelector('div.cards').appendChild(card);
            card.appendChild(nameRental);
            card.appendChild(priceHalf);
            card.appendChild(priceFull);
            card.appendChild(imagen);
            
        }
    });
