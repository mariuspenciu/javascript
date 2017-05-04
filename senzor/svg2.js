var svg = document.getElementById("svg")
svg.addEventListener("touchstart", on_touch_start);

function on_touch_start(evt)

{
	for (var i = 0; i < evt.touches.length; i++){
		var t =evt.touches[i];
		
		var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
		c.setAttribute("cx", t.pageX);
		c.setAttribute("cy", t.pageY);
		c.setAttribute("r", 10);
		c.setAttribute("stroke", "red");
		c.setAttribute("fill", "red");
		svg.appendChild(c);
		
	}
}