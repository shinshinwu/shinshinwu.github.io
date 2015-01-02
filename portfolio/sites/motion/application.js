var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.globalCompositeOperation = 'lighter';

ctx.rect(68, 10, 800, 800);
ctx.fillStyle = 'rgb(200,200,200)';
ctx.fill();
ctx.globalCompositeOperation = 'destination-out';

ctx.fillStyle = 'rgba(255,255,255,1)';
ctx.font="106px Raleway";
ctx.fillText("MOTION",50,150);
ctx.fillText("IS",120,227);
ctx.fillText("LIFE",270,227);