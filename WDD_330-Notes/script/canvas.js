//---------------------canvas
const canvasElement = document.getElementById('canvas');
const context = canvasElement.getContext('2d');
context.fillStyle = "#0000cc"; // a blue fill color 
context.strokeStyle = "white"; // a gray stroke color
context.lineWidth = 4;
context.fillRect(10,10,100,50);
context.strokeRect(10,100,100,50);

//*-----  T
context.beginPath();
context.moveTo(130, 50);
context.lineTo(180, 50);
context.moveTo(155, 50);
context.lineTo(155, 90);
context.strokeStyle = '#c00';
context.lineWidth = 15;
context.stroke();

//------yellow circle
context.beginPath();
context.arc(200, 200, 30, 0, Math.PI * 2, false);
context.strokeStyle = '#ff0';
context.lineWidth = 4;
context.stroke();


