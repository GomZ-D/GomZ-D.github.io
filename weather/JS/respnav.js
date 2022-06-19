const hambutton = document.querySelector('.ham');
const mainNav = document.querySelector('.navigation');

hambutton.addEventListener('click', () => {
    mainNav.classList.toggle('responsive')
},false);