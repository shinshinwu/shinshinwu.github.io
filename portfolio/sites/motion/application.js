var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.globalCompositeOperation = 'lighter ';

ctx.rect(50, 10, 500, 500);
ctx.fillStyle = 'rgb(200,200,200)';
ctx.fill();
ctx.globalCompositeOperation = 'destination-out';

ctx.fillStyle = 'rgba(255,255,255,1)';
ctx.font="120px Raleway";
ctx.fillText("MOTION",50,150);
ctx.fillText("IS",83,230);
ctx.fillText("LIFE",229,230);