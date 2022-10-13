//------CANVAS W05L09C

let canvas = document.getElementById('myCanvas');
let context2 = canvas.getContext('2d');
context2.strokeStyle = 'red';
context2.fillStyle = "rgba(0, 0, 255, 0.5)";
context2.strokeRect(10, 10, 100, 100);
context2.fillRect(10, 10, 100, 100);
context2.fillStyle=('green')
context2.strokeStyle=('yellow')
context2.strokeRect(20,20,80,80)
context2.fillRect(20,20,80,80)


//***********canvas 2 */

function drawPattern() {
    let canvas2 = document.getElementById('myCanvas2');
    let context = canvas2.getContext('2d'); 
    context.strokeStyle = 'red';
    var img = new Image();
    img.src = "soccer.png";
    img.onload = function () {
        var pattern = context.createPattern(img,'repeat');
        context.fillStyle = pattern;
        context.fillRect(0,0,100,100)
        context.strokeRect(0,0,100,100)
    }
        //gradient****************************
        var gradient = context.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, "blue"); 
        gradient.addColorStop(1, "white"); 
        context.fillStyle = gradient; 
        context.fillRect(100, 100, 100, 100); 
        context.strokeRect(100, 100, 100, 100); 
        //************************************ */
}

drawPattern();

function drawCrcle() {
    let canvas = document.getElementById('myCanvas3');
    let context = canvas.getContext('2d')
    context.beginPath()
    context.arc(50, 50, 30, 0, Math.PI*2, true)  
    context.closePath();
    context.strokeStyle = 'red';
    context.fillStyle ='blue';
    context.lineWidth = 3;
    context.fill();
    context.stroke();
}

drawCrcle()


window.addEventListener("load", drawImageToCanvas, false);

function drawImageToCanvas() {
    var canvas = document.getElementById("demo6");
    var context = canvas.getContext("2d");
    var image = document.getElementById("myImageElem");
    context.drawImage(image, 68, 68); 
}


 