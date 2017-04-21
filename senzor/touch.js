window.addEventListener("touchstart", on_touch_start);
window.addEventListener("touchmove", on_touch_move);

var touch_colors = ["#FF0000", "#00FF00", "#0000FF", "0F0F00", "#F0F0F0"];

var touch_id = [];

function on_touch_start(evt)
{
	var touches = evt.changedTouches;
	
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	
	for (var i = 0; i < touches.length; i++){
		touch_id.push({id:touches[i].identifier, color: touch_colors[i], lastX: touches[i].pageX, lastY: touches[i].pageY});
		
		ctx.beginPath();
		
		
		ctx.strokeStyle = touch_id[i].color;
		ctx.arc(touches[i].pageX, touches[i].pageY, 5, 0, 2 * Math.PI);
		ctx.stroke();
	}
}

function on_touch_move(evt)
{
	var touches = evt.changedTouches;
	
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	
	for (var i = 0; i < touches.length; i++){
		var color = "#FFFFFF";
		var lastX = 0;
		var lastY = 0;
		var j = -1
		for (j = 0; j < touch_id.length; j++)
			if (touches[i].identifier == touch_id[j].id){
				color = touch_id[j].color;
				lastX = touch_id[j].lastX;
				lastY = touch_id[j].lastY;
				break;
			}
		ctx.beginPath();
		ctx.moveTo(lastX, lastY);
		ctx.lineTo(touches[i].pageX, touches[i].pageY);
		touch_id[j].lastX = touches[i].pageX;
		touch_id[j].lastY = touches[i].pageY;
		
		ctx.strokeStyle = color;
		ctx.arc(touches[i].pageX, touches[i].pageY, 5, 0, 2 * Math.PI);
		ctx.stroke();
	}
}