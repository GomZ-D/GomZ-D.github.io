const hambutton = document.querySelector('.ham');
const mainNav = document.querySelector('.navbar');

 

hambutton.addEventListener('click', () => {
    mainNav.classList.toggle('responsive')
},false);

