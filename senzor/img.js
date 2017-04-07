window.addEventListener("deviceorientation", on_device_orientation);

var img = document.getElementById("img");

function on_device_orientation(evt)
{
	var alpha = evt.alpha;
	var beta = evt.beta;
	var gamma = evt.gamma;
	
	document.getElementById("a").innerHTML = "alpha = " + alpha.toString();
	document.getElementById("b").innerHTML = "beta = " + beta.toString();
	document.getElementById("g").innerHTML = "gamma = " + gamma.toString();
	
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	
	ctx.setTransform(1, 0, 0, 1, 0, 0);
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	var centru = {x:canvas.width / 2, y:canvas.height / 2};
	var latura_patrat = 50;
	
	
	
	ctx.translate(centru.x, centru.y);
	ctx.rotate(alpha * Math.PI / 180);
	
	ctx.beginPath();
	ctx.drawImage(img, - latura_patrat / 2 + gamma * (canvas.width / 2 - latura_patrat * 0.71) / 90,  - latura_patrat / 2 + beta * (canvas.height / 2 - latura_patrat * 0.71) / 90, );
	ctx.stroke();
}