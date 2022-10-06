const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn7 = document.getElementById('btn7');

btn.addEventListener('click', ()=>{
    document.getElementById('box1').className='btnbox1'
})
btn2.addEventListener('click', ()=>{
    document.getElementById('box2').className='btnbox2'
})
btn3.addEventListener('click', ()=>{
    document.getElementById('box3').className='btnbox3'
})
btn4.addEventListener('click', ()=>{
    document.getElementById('box4').className='btnbox4'
})
btn7.addEventListener('click', ()=>{
    document.getElementById('box7').className='btnbox7'
})